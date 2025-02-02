import { colors, textType } from "@/constants";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const EmptyState = ({ searchedTerm }: { searchedTerm: string }) => {
  return (
    <View className="flex-1 w-full h-[300px] items-center justify-center">
      <Text
        style={{
          ...textType.subHeader,
          fontSize: 20,
          color: colors.orange,
          textAlign: "center",
        }}
      >
        No Locations Found on {searchedTerm}
      </Text>

      <Text>Please try something else </Text>
    </View>
  );
};

export default EmptyState;
