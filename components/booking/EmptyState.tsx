import { colors, textType } from "@/constants";
import React from "react";
import { Text, View } from "react-native";
import { CustomButton } from "../general/CustomButton";
import { router } from "expo-router";

const BookingEmptyState = () => {
  return (
    <View style={{ flex: 1, width: "100%", justifyContent: "center" }}>
      <Text
        style={{
          ...textType.subHeader,
          fontSize: 20,
          color: colors.orange,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        No Ongoing Bookings yet
      </Text>
      <CustomButton
        type="primary"
        width="60%"
        style={{
          alignSelf: "center",
        }}
        disabled={false}
        onPress={() => router.push("/")}
      >
        <Text
          style={{
            ...textType.paragraph,
            fontSize: 16,
            color: "white",
            textAlign: "center",
            paddingVertical: 10,
          }}
        >
          Book a Flight
        </Text>
      </CustomButton>
    </View>
  );
};

export default BookingEmptyState;
