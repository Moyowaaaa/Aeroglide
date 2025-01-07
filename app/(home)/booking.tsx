import CustomSafeAreaView from "@/components/general/CustomSafeAreaView";
import React from "react";
import { Text, View } from "react-native";

const BookingScreen = () => {
  return (
    <CustomSafeAreaView>
      <View className="w-full gap-16 flex-1 px-6 pb-6">
        <Text>Booking</Text>
      </View>
    </CustomSafeAreaView>
  );
};

export default BookingScreen;
