import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

export const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" />
      <Text style={{ marginTop: 15 }}>Загрузка...</Text>
    </View>
  );
};
