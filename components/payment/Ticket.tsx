import { colors, isAndroid, textType } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";
import React, { useContext } from "react";
import { StatusBar, Text, View } from "react-native";
import TopBar from "../booking/TopBar";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { BookingContext } from "@/context/BookingContext";
import TicketInfo from "./components/TicketInfo";

const Ticket = () => {
  const router = useRouter();
  const { bookingDetails } = useContext(BookingContext);

  return (
    <React.Fragment>
      <StatusBar barStyle={isAndroid ? "dark-content" : "light-content"} />
      <View style={{ flex: 1, position: "relative" }}>
        <LinearGradient
          colors={["#3841A3", "#353E9E"]}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0 }}
          style={{
            width: "100%",
            height: "35%",
            position: "absolute",
            top: -60,
            backgroundColor: colors.blue,
          }}
        />

        <TopBar>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingVertical: 10,
              alignItems: "center",
              gap: 10,
            }}
          >
            <Ionicons
              name="arrow-back-circle-outline"
              size={45}
              color={colors.white}
              onPress={() => router.push("/(tabs)")}
            />

            <Text
              style={{
                ...textType.paragraph,
                fontSize: 20,
                color: colors.white,
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              {" "}
              {bookingDetails.airline.name}
            </Text>
          </View>
        </TopBar>

        <View
          style={{
            width: "100%",

            flex: 1,
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <TicketInfo />
          </View>
        </View>
      </View>
    </React.Fragment>
  );
};

export default Ticket;
