import { colors, TextType } from "@/constants";
import { moderateScale } from "@/utils/scaleUtils";
import React from "react";
import { Image, Text, View } from "react-native";

const HomeBanner = () => {
  return (
    <View
      className="w-full   justify-center h-auto relative "
      style={{
        backgroundColor: "#E0D9FF",
        marginVertical: 24,
        borderRadius: 7,
      }}
    >
      <Text
        style={{
          ...TextType.header,
          color: colors.black,
          paddingVertical: 27,
          paddingHorizontal: 20,
          maxWidth: moderateScale(248),
          fontSize: 22,
          lineHeight: 30,
        }}
      >
        Travel guidelines for <Text style={{ color: colors.blue }}>flight</Text>{" "}
        travellers.
      </Text>

      <Image
        source={require("../../assets/images/bannerPlane.png")}
        className="absolute right-0  "
        style={{ alignSelf: "flex-end" }}
      />
    </View>
  );
};

export default HomeBanner;
