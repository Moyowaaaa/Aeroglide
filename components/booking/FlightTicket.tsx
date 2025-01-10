import { colors, textType } from "@/constants";
import { locations, ticketCounts, timeSuffixes } from "@/constants/data";
import { flight } from "@/constants/types";
import { flightSearchContext } from "@/context/FlightContext";
import { randomizeStuff, splitAmountByThousands } from "@/utils";
import React, { useContext } from "react";
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const FlightTicket = ({ flight }: { flight: flight }) => {
  const { flightDetails } = useContext(flightSearchContext);

  return (
    <TouchableOpacity style={{ width: "100%", height: "auto" }}>
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
            {flight.airline.name}
          </Text>
          <Image
            source={flight.airline.logo as ImageSourcePropType}
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
            {flightDetails.from?.airport.callSign}
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
            {flightDetails.to?.airport.callSign}
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
            {flightDetails?.from?.name?.split(" ")[0]}
          </Text>
          <Text
            style={{ ...textType.paragraph, fontSize: 16, color: colors.black }}
          >
            {flight.time.duration} hr
          </Text>

          <Text
            style={{
              ...textType.paragraph,
              fontSize: 18,
              color: colors.grey,
            }}
          >
            {flightDetails?.to?.name?.split(" ")[0]}
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
            {flight.time.fromTime}:{randomizeStuff(timeSuffixes.slice(0, 1))}{" "}
          </Text>

          <Text
            style={{
              ...textType.paragraph,
              fontSize: 14,
              color: colors.black,
            }}
          >
            {flight.time.toTime}:{randomizeStuff(timeSuffixes.slice(0, 1))}{" "}
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
            {randomizeStuff(ticketCounts).slice(0, 1)} Tickets remaining
          </Text>

          <Text
            style={{
              ...textType.subHeader,
              fontSize: 18,
              color: colors.black,
            }}
          >
            $
            {splitAmountByThousands(
              randomizeStuff(locations?.map((l) => l.cost))[0]
            )}
            .00
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default FlightTicket;
