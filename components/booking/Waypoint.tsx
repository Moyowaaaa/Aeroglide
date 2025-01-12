import { colors, textType } from "@/constants";
import { BookingContext } from "@/context/BookingContext";
import { flightSearchContext } from "@/context/FlightContext";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { Image, Text, View } from "react-native";

const Waypoint = () => {
  const { bookingDetails } = useContext(BookingContext);
  const { flightDetails } = useContext(flightSearchContext);

  return (
    <View style={{ width: "90%", alignSelf: "center", marginVertical: 10 }}>
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "black",
            padding: 10,
            paddingVertical: 15,
            width: 54,
            justifyContent: "center",
            alignItems: "center",
            height: "auto",
            borderRadius: 6,
          }}
        >
          <MaterialCommunityIcons
            name="airplane-takeoff"
            size={24}
            color="white"
          />
        </View>

        <View>
          <Text
            style={{
              ...textType.paragraph,
              fontSize: 14,
              color: colors.grey,
            }}
          >
            {flightDetails.from?.airport.name}
          </Text>
          <Text
            style={{
              ...textType.header,
              fontSize: 20,
              color: colors.black,
            }}
          >
            {bookingDetails?.departureTime},{" "}
            {flightDetails?.from?.name.split(" ")[0]},{" "}
            {flightDetails.from?.airport.callSign}
          </Text>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View style={{ width: 54, height: 150 }}>
          <Image
            source={require("../../assets/images/waypointIndicator.png")}
            style={{ width: 20, height: 150, alignSelf: "center" }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            alignItems: "center",
            gap: 15,
            paddingVertical: 8,
            borderRadius: 6,
            backgroundColor: "#F4F8FB",
          }}
        >
          <Ionicons name="time" size={24} color="#B1B1B1" />
          <Text
            style={{
              ...textType.paragraph,
              fontSize: 16,
              color: colors.darkGrey,
            }}
          >
            {bookingDetails?.time?.duration} hr
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <View
          style={{
            backgroundColor: colors.blue,
            padding: 10,
            paddingVertical: 15,
            width: 54,
            justifyContent: "center",
            alignItems: "center",
            height: "auto",
            borderRadius: 6,
          }}
        >
          <MaterialCommunityIcons
            name="airplane-landing"
            size={24}
            color={colors.white}
          />
        </View>

        <View>
          <Text
            style={{
              ...textType.paragraph,
              fontSize: 14,
              color: colors.grey,
            }}
          >
            {flightDetails.to?.airport.name}
          </Text>
          <Text
            style={{
              ...textType.header,
              fontSize: 20,
              color: colors.black,
            }}
          >
            {bookingDetails?.arrivalTime},{" "}
            {flightDetails?.to?.name.split(" ")[0]},{" "}
            {flightDetails.to?.airport.callSign}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Waypoint;
