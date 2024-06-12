import axios from "axios";
import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Loading } from "../Components/Loading";

const PostImage = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 12px;
  margin-top: 15px;
`;
const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

export const FullPost = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState();
  const { id, title } = route.params;

  const fetchPosts = () => {
    navigation.setOptions({
      title,
    });
    setIsLoading(true);
    async function fetchData() {
      try {
        const response = await axios.get("https://randomuser.me/api/?id=" + id);
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
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <View style={{ padding: 20 }}>
      {items && (
        <>
          <PostImage source={{ uri: items[0].picture.large }} />
          <PostTitle>
            Name:
            {items[0].name.first + " " + items[0].name.last}
          </PostTitle>
          <PostTitle>Email: {items[0].email}</PostTitle>
          <PostTitle>Tel: {items[0].phone}</PostTitle>
          <PostTitle>City: {items[0].location.city}</PostTitle>
          <PostTitle>Country: {items[0].location.country}</PostTitle>
        </>
      )}
    </View>
  );
};
