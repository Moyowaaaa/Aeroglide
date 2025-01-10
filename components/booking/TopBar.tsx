import { colors, textType } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TopBar = ({
  title,
  canGoBack,
  desc,
}: {
  title: string;
  canGoBack: boolean;
  desc?: string;
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

      <View style={{ gap: 4, flex: 1, alignItems: "flex-start" }}>
        <Text
          style={{
            ...styleSheet.title,
            ...textType.paragraph,
            fontSize: 20,
            color: colors.black,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            ...textType.paragraph,

            color: colors.grey,
          }}
        >
          {desc}
        </Text>
      </View>
    </View>
  );
};

const styleSheet = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    height: 60,
    flex: 1,
    gap: 24,

    position: "relative",
  },
  icon: {
    marginLeft: 1,
    zIndex: 1,
  },
  title: {
    alignSelf: "flex-start",
  },
});

export default TopBar;
