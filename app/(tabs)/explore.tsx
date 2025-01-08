import Header from "@/components/auth/Header";
import CustomSafeAreaView from "@/components/general/CustomSafeAreaView";
import NavigationBar from "@/components/general/NavigationBar";
import { colors, textType } from "@/constants";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import ExploreGallery from "@/components/explore/Gallery";

const ExploreScreen = () => {
  const [searchedTerm, setSearchedTerm] = useState<string>("");

  return (
    <CustomSafeAreaView>
      <ScrollView style={styles.container}>
        <NavigationBar title="Explore" canGoBack={true} />

        <View
          style={{
            ...styles.inputContainer,
            width: "100%",
          }}
        >
          <TextInput
            style={[styles.textInput, textType.paragraph]}
            placeholder="Search your dream location."
            placeholderTextColor={colors.darkGrey}
            onChangeText={(val) => setSearchedTerm(val)}
          />
          <View style={styles.iconContainer}>
            <EvilIcons name="search" size={20} color="black" />
          </View>
        </View>

        <ExploreGallery searchedTerm={searchedTerm} />
      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fefefe",
    paddingHorizontal: 15,
    gap: 24,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d6d6d6",
    borderRadius: 15,
    overflow: "hidden",
  },
  textInput: {
    flex: 1,
    paddingVertical: 12,
    paddingLeft: 10,
    fontSize: 23,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderLeftWidth: 1,
    borderLeftColor: "#d6d6d6",
  },
});
