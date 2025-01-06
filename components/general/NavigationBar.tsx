import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NavigationBar = ({
  title,
  canGoBack,
}: {
  title: string;
  canGoBack: boolean;
}) => {
  const router = useRouter();

  return (
    <View style={styleSheet.container}>
      {canGoBack && (
        <Ionicons
          name="arrow-back-circle-outline"
          size={40}
          color={"#727272"}
          onPress={() => router.back()}
          style={styleSheet.icon}
        />
      )}

      <Text style={styleSheet.title}>{title}</Text>
    </View>
  );
};

const styleSheet = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,

    position: "relative",
  },
  icon: {
    marginLeft: 1,
    zIndex: 1,
  },
  title: {
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

export default NavigationBar;
