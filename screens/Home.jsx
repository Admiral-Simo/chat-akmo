import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";

const Home = ({ route, navigation }) => {
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    if (route.params) {
      setAvatar(route.params.image);
    } else {
      navigation.navigate("Profilesetup");
    }
  });
  if (route.params) {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Home;
