import React from "react";
import { Image, View } from "react-native";

const DebitCard = () => {
  return (
    <View style={{ width: "100%", height: 250 }}>
      <Image
        source={require("@/assets/images/debitCard.png")}
        resizeMode="contain"
        style={{ height: "100%", width: "100%", objectFit: "contain" }}
      />
    </View>
  );
};

export default DebitCard;
