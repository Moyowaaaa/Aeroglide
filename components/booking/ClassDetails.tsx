import { colors, textType } from "@/constants";
import { SeatTypes } from "@/constants/types";
import { bookingContext } from "../../context/BookingContext";

import { flightSearchContext } from "@/context/FlightContext";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Electricity, Receipt, Wifi, Airpods } from "iconsax-react-native";
import React, { useContext, useMemo } from "react";
import { Text, View } from "react-native";

const ClassDetails = () => {
  const { bookingDetails } = useContext(bookingContext);
  const { flightDetails } = useContext(flightSearchContext);

  const seatTypes: SeatTypes = {
    economy: [
      {
        icon: <Electricity variant="Bold" size={24} color={colors.blue} />,
        desc: "Power Plugs",
      },
      {
        icon: (
          <MaterialCommunityIcons
            name="seat-passenger"
            size={24}
            color={colors.blue}
          />
        ),
        desc: "Extra legroom",
      },
      {
        icon: <Receipt variant="Bold" size={24} color={colors.blue} />,
        desc: "Semi refundable",
      },
      {
        icon: <AntDesign name="close" size={24} color={colors.red} />,
        desc: "Non exchangeable",
      },
    ],

    business: [
      {
        icon: <Electricity variant="Bold" size={24} color={colors.blue} />,
        desc: "Power Plugs with USB C",
      },
      {
        icon: (
          <MaterialCommunityIcons
            name="seat-recline-extra"
            size={24}
            color={colors.blue}
          />
        ),
        desc: "Reclining Seats",
      },
      {
        icon: <Wifi variant="Bold" size={24} color={colors.blue} />,
        desc: "Free Wifi",
      },
      {
        icon: <Receipt variant="Bold" size={24} color={colors.blue} />,
        desc: "Fully refundable",
      },
    ],
    "first class": [
      {
        icon: <Electricity variant="Bold" size={24} color={colors.blue} />,
        desc: "Power Plugs with USB",
      },
      {
        icon: (
          <MaterialIcons
            name="airline-seat-flat"
            size={24}
            color={colors.blue}
          />
        ),
        desc: "Fully Equipped Suite",
      },
      {
        icon: <Wifi variant="Bold" size={24} color={colors.blue} />,
        desc: "In-flight Infotainment with free wifi",
      },
      {
        icon: <Receipt variant="Bold" size={24} color={colors.blue} />,
        desc: "Fully refundable",
      },
    ],
  };
  const flightClass = bookingDetails?.class?.toLowerCase() || "economy";

  return (
    <View style={{ width: "95%", alignSelf: "center", gap: 10 }}>
      <Text
        style={{
          ...textType.subHeader,
          fontSize: 16,
          color: colors.black,
        }}
      >
        Class
      </Text>

      <View
        style={{
          width: "90%",
          paddingHorizontal: 8,
          paddingVertical: 10,
          borderRadius: 10,
          borderWidth: 2,
          gap: 10,
          borderColor: colors.blue,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "95%",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              ...textType.subHeader,
              fontSize: 16,
              color: colors.black,
            }}
          >
            {bookingDetails?.class}
          </Text>

          <Text
            style={{
              ...textType.paragraph,
              fontSize: 14,
              color: colors.black,
            }}
          >
            {flightDetails?.seats} Ticket
            {flightDetails?.seats > 1 && `s`}
          </Text>
        </View>

        <View
          style={{
            width: "95%",
            alignSelf: "center",
            borderTopWidth: 1,
            paddingVertical: 20,
            borderTopColor: colors.grey,
          }}
        >
          {seatTypes[flightClass as keyof SeatTypes].map((seat, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <View style={{ marginRight: 10 }}>{seat.icon}</View>
              <Text
                style={{
                  ...textType.paragraph,
                  fontSize: 14,
                  color: colors.black,
                }}
              >
                {seat.desc}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ClassDetails;
