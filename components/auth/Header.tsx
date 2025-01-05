import { colors, TextType } from "@/constants";
import React from "react";
import { Text, View } from "react-native";

const Header = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <View className="w-full  flex-row justify-between">
      <View className="gap-4">
        <Text style={{ ...TextType.header, color: colors.blue }}>{title}</Text>
        <Text
          style={{ ...TextType.paragraph, color: colors.grey, fontSize: 16 }}
        >
          {desc}
        </Text>
      </View>
    </View>
  );
};

export default Header;
