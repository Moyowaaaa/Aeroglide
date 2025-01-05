import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const NavigationBar = () => {
  const router = useRouter();
  const { top } = useSafeAreaInsets();

  return (
    <View className="w-full flex-row justify-between px-2 self-left">
      <Ionicons
        name="arrow-back-circle-outline"
        size={40}
        color={"#727272"}
        onPress={() => router.back()}
      />
      <Text className="self-center">He</Text>
    </View>
  );
};

const styleSheet = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "red",
    width: "100%",
  },
});

export default NavigationBar;
