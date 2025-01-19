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
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,

          height: isAndroid ? 600 : 550,
          padding: 4,
          position: "relative",
          paddingHorizontal: 10,
        }}
        useBottomSafeAreaPadding={true}
        indicatorStyle={{ width: 60, backgroundColor: "#B3B3B3" }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "95%",
            paddingTop: 24,
            alignSelf: "center",
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
