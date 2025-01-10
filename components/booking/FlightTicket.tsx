import { colors, textType } from "@/constants";
import { airlines, locations } from "@/constants/data";
import { splitAmountByThousands } from "@/utils";
import React from "react";
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Text,
  View,
} from "react-native";

const FlightTicket = () => {
  return (
    <View style={{ width: "100%", height: "auto" }}>
      <ImageBackground
        source={require("../../assets/images/ticket.png")}
        resizeMode="cover"
        className="h-full w-full px-4"
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
          paddingVertical: 15,
        }}
      >
        <View style={{ width: "90%", gap: 2, flexDirection: "row" }}>
          <Text
            style={{
              ...textType.paragraph,
              fontSize: 14,
              color: colors.black,
            }}
          >
            {airlines[0].name}
          </Text>
          <Image
            source={airlines[0].logo as ImageSourcePropType}
            style={{ width: 20, height: 20 }}
          />
        </View>

        <View
          style={{
            width: "90%",

            justifyContent: "space-between",
            gap: 2,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              ...textType.header,
              fontSize: 26,
              color: colors.black,
            }}
          >
            {locations[0]?.airport.callSign}
          </Text>
          <Image
            source={require("../../assets/images/distanceIndicator.png")}
            style={{ width: 150, height: 20 }}
          />

          <Text
            style={{
              ...textType.header,
              fontSize: 26,
              color: colors.black,
            }}
          >
            {locations[3]?.airport.callSign}
          </Text>
        </View>

        <View
          style={{
            width: "90%",

            justifyContent: "space-between",
            gap: 2,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              ...textType.paragraph,
              fontSize: 18,
              color: colors.grey,
            }}
          >
            {locations[0]?.name?.split(" ")[0]}
          </Text>
          <Text
            style={{ ...textType.paragraph, fontSize: 16, color: colors.black }}
          >
            {locations[1]?.name?.split(" ")[0]}
          </Text>

          <Text
            style={{
              ...textType.paragraph,
              fontSize: 18,
              color: colors.grey,
            }}
          >
            {locations[3]?.name?.split(" ")[0]}
          </Text>
        </View>

        <View
          style={{
            width: "90%",

            justifyContent: "space-between",
            gap: 2,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              ...textType.paragraph,
              fontSize: 14,
              color: colors.black,
            }}
          >
            07:30 AM
          </Text>

          <Text
            style={{
              ...textType.paragraph,
              fontSize: 14,
              color: colors.black,
            }}
          >
            10:00 AM
          </Text>
        </View>

        <Image
          source={require("../../assets/images/dashedLine.png")}
          style={{ width: "90%", height: 1 }}
        />

        <View
          style={{
            paddingVertical: 4,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "90%",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              ...textType.paragraph,
              fontSize: 14,
              color: colors.black,
            }}
          >
            15 Tickets remaining
          </Text>

          <Text
            style={{
              ...textType.subHeader,
              fontSize: 18,
              color: colors.black,
            }}
          >
            ${splitAmountByThousands(locations[2]?.cost)}.00
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default FlightTicket;
