import BookingEmptyState from "@/components/booking/EmptyState";
import FlightTicket from "@/components/booking/FlightTicket";
import TopBar from "@/components/booking/TopBar";
import CustomSafeAreaView from "@/components/general/CustomSafeAreaView";
import { flights } from "@/constants/data";
import { flightSearchContext } from "@/context/FlightContext";
import { router } from "expo-router";
import React, { useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const BookingScreen = () => {
  const { flightDetails, setFlightDetails } = useContext(flightSearchContext);

  const resetBooking = () => {
    router.back();
    setTimeout(() => {
      setFlightDetails({
        ...flightDetails,
        isBooked: false,
      });
    }, 1000);
  };

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
            backFunction={resetBooking}
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
