import Header from "@/components/auth/Header";
import CustomSafeAreaView from "@/components/general/CustomSafeAreaView";
import NavigationBar from "@/components/general/NavigationBar";
import { TextType } from "@/constants";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const ExploreScreen = () => {
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <NavigationBar title="Explore" canGoBack={true} />

        <View
          style={{
            ...styles.inputContainer,
            width: "100%",
          }}
        >
          <TextInput
            style={[styles.textInput, TextType.paragraph]}
            placeholder="Search your dream location."
          />
          <View style={styles.iconContainer}>
            <EvilIcons name="search" size={20} color="black" />
          </View>
        </View>

        <Text>Hola</Text>
      </View>
    </CustomSafeAreaView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fefefe",
    paddingHorizontal: 10,
    gap: 24,
  },
  inputContainer: {
    flexDirection: "row", // Arrange items in a row
    alignItems: "center", // Align items vertically in the center
    borderWidth: 1,
    borderColor: "#d6d6d6",
    borderRadius: 15,
    overflow: "hidden",
  },
  textInput: {
    flex: 1, // Take up available space
    paddingVertical: 12,
    paddingLeft: 10,
    fontSize: 23,
  },
  iconContainer: {
    justifyContent: "center", // Center the icon
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderLeftWidth: 1,
    borderLeftColor: "#d6d6d6", // Optional: separator between input and icon
  },
});
