import { colors, isAndroid, textType } from "@/constants";
import React, { useContext } from "react";
import { Text, View } from "react-native";
import ActionSheet from "react-native-actions-sheet";
import Waypoint from "../booking/Waypoint";
import BookingDetails from "../booking/BookingDetails";

const BookingSheet = () => {
  return (
    <>
      <ActionSheet
        gestureEnabled
        containerStyle={{
          paddingTop: 10,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,

          height: isAndroid ? 600 : 550,
          padding: 4,
          position: "relative",
          paddingHorizontal: 10,
        }}
        indicatorStyle={{ width: 60, backgroundColor: "#B3B3B3" }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text
            style={{
              ...textType.header,
              fontSize: 20,
              color: colors.black,
            }}
          >
            Journey
          </Text>
        </View>

        <BookingDetails />
        <Waypoint />
      </ActionSheet>
    </>
  );
};

export default BookingSheet;
