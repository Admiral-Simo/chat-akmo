import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconAwesome from "react-native-vector-icons/FontAwesome";

import * as ImagePicker from "expo-image-picker";

const ProfileSetup = ({ navigation }) => {
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState("");
  const handleChoosePhoto = async () => {
    const options = {
      noData: true,
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    };
    let response = await ImagePicker.launchImageLibraryAsync(options);
    if (response.uri) {
      setPhoto(response);
      console.log(response);
    }
  };
  const handleNext = () => {
    if (name !== "") {
      navigation.navigate("Home", { photo: photo });
    }
  };
  return (
    <View className="flex-1 justify-start items-center mt-20 relative">
      <Text className="text-[23px] font-bold text-green-500 self-center">
        Create your business profile
      </Text>
      <Text className="text-sm my-5 text-gray-500 self-center">
        Help people learn about your business
      </Text>
      {/* Upload Photo */}

      {/* Actual Photo */}
      {photo ? (
        <TouchableOpacity className="mb-3" onPress={handleChoosePhoto}>
          <Image
            source={{ uri: photo.uri }}
            className="rounded-full h-32 w-32"
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          className="rounded-full p-10 bg-gray-200  mb-3"
          onPress={handleChoosePhoto}
        >
          <Icon name="camera-plus" size={60} color="#b7bcc0" />
        </TouchableOpacity>
      )}
      <View className="flex-row self-start space-x-3 mx-6 justify-center items-center">
        <IconAwesome name="user" size={30} color="#a2adb3" />
        <TextInput className="border-b-2 flex-1" placeholder="Your name" />
      </View>
      <TouchableOpacity className="p-2 bg-[#03ce42] absolute bottom-8">
        <Text className="text-white">NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileSetup;
