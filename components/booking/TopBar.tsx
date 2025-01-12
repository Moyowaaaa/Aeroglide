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

      <View
        style={{
          gap: 1,
          alignItems: "center",
          alignSelf: "center",
          position: "absolute",
          justifyContent: "center",
          left: 0,
          top: 2,
          width: "100%",
          paddingVertical: 2,
        }}
      >
        <Text
          style={{
            ...styleSheet.title,
            ...textType.paragraph,
            fontSize: 20,
            color: colors.black,
            textAlign: "center",
            alignSelf: "center",
          }}
        >
          {title}
        </Text>
        {desc && (
          <Text
            style={{
              ...textType.paragraph,

              color: colors.grey,
            }}
          >
            {desc}
          </Text>
        )}
      </View>
    </View>
  );
};

const styleSheet = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    // height: 60,
    gap: 24,
    position: "relative",
  },
  icon: {
    marginLeft: 1,
    zIndex: 1,
  },
  title: {
    alignSelf: "flex-start",
    justifyContent: "center",
  },
});

export default TopBar;
