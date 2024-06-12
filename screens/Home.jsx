import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Alert,
  FlatList,
  Text,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { Post } from "../Components/Post";
import axios from "axios";
import { Loading } from "../Components/Loading";

export const Home = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);

  const fetchPosts = () => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=20"
        );
        setItems(response.data.results);
        console.log(response.data.results);
      } catch (err) {
        console.log(err);
        Alert.alert("Ошибка", "Не удалось получить пользователей");
      }
    }

    fetchData();
    setIsLoading(false);
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("FullPost", {
                id: item.id.value,
                title: item.name.title,
              })
            }
          >
            <Post {...item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
