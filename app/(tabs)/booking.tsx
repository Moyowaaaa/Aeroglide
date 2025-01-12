import BookingEmptyState from "@/components/booking/EmptyState";
import FlightTicket from "@/components/booking/FlightTicket";
import TopBar from "@/components/booking/TopBar";
import CustomSafeAreaView from "@/components/general/CustomSafeAreaView";
import NavigationBar from "@/components/general/NavigationBar";
import { airlines, flights } from "@/constants/data";
import { flight } from "@/constants/types";
import { flightSearchContext } from "@/context/FlightContext";
import { useLocalSearchParams } from "expo-router";
import React, { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const BookingScreen = () => {
  const { flightDetails } = useContext(flightSearchContext);

  return (
    <CustomSafeAreaView>
      {!flightDetails.isBooked ? (
        <BookingEmptyState />
      ) : (
        <ScrollView style={styles.container}>
          <TopBar
            title={`${flightDetails.from?.name.split(" ")[0]} to ${
              flightDetails?.to?.name.split(" ")[0]
            }`}
            desc={`${flightDetails?.seats} Passenger${
              flightDetails?.seats > 1 ? `s` : ""
            } , ${flightDetails?.seat}`}
            canGoBack={true}
          />

          <View style={{ gap: 10, marginTop: 24 }}>
            {flights.map((flight, index) => (
              <FlightTicket flight={flight} key={index} />
            ))}
          </View>
        </ScrollView>
      )}
    </CustomSafeAreaView>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fefefe",
    paddingHorizontal: 10,
    gap: 32,
  },
});
