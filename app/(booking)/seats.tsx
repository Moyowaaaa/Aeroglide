import TopBar from "@/components/booking/TopBar";
import CustomSafeAreaView from "@/components/general/CustomSafeAreaView";
import React, { useMemo, useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

type SeatStatus = "Available" | "Booked" | "Unavailable";

interface Seat {
  id: string;
  status: SeatStatus;
}

const SeatOptionsScreen = () => {
  const rows = 5;
  const columns = ["A", "B", "C", "D", "E", "F"];

  // Initialize seats
  const initialSeats: Seat[][] = useMemo(
    () =>
      Array.from({ length: rows }, (_, rowIndex) =>
        columns.map((col) => ({
          id: `${col}${rowIndex + 1}`, // E.g., "A1"
          status: Math.random() > 0.7 ? "Unavailable" : "Available", // Randomly assign some seats as unavailable
        }))
      ),
    []
  );

  const [seats, setSeats] = useState(initialSeats);

  const seatColor = useMemo(() => {
    //if seat is available return green
    //if seat is booked return blue
    //if seat is unavaliable retun purple
    //  use this Icon to depict seat:   <MaterialCommunityIcons
    //     name="seat-recline-extra"
    //     size={24}
    //     color={colors.blue}
    //   />
  }, []);

  console.log({ seats });

  return (
    <View
      style={{
        flex: 1,
        borderWidth: 2,
        height: "100%",
        backgroundColor: "#f6f7f9",
      }}
    >
      <CustomSafeAreaView>
        <React.Fragment>
          <TopBar canGoBack={true} title="Select Seat" />
          <ScrollView style={{ borderWidth: 4, width: "100%" }}>
            <ImageBackground
              source={require("@/assets/images/airplaneMockup.png")}
              style={{
                width: "100%",
                backgroundSize: "cover",
                height: 1000,
                position: "relative",
              }}
            >
              <View
                style={{
                  width: "100%",
                  borderWidth: 2,
                  height: "100%",
                  borderColor: "red",
                  position: "relative",
                }}
              >
                <View
                  style={{
                    width: "100%",
                    borderWidth: 2,
                    // alignSelf: "flex-end",
                    height: 800,
                    flex: 1,
                    marginTop: 300,
                    paddingTop: 20,
                    position: "absolute",
                    flexDirection: "row",
                    // bottom: ,
                  }}
                >
                  <View style={styles.seatGrid}>
                    {seats.map((row, rowIndex) => (
                      <View key={`row-${rowIndex}`} style={styles.row}>
                        {row.map((seat) => (
                          <TouchableOpacity
                            key={seat.id}
                            style={[
                              styles.seat,
                              seat.status === "Available" &&
                                styles.availableSeat,
                              seat.status === "Booked" && styles.bookedSeat,
                              seat.status === "Unavailable" &&
                                styles.unavailableSeat,
                            ]}
                            disabled={seat.status === "Unavailable"}
                          >
                            <MaterialCommunityIcons
                              name="seat-recline-extra"
                              size={24}
                              color="white"
                            />
                            <Text style={styles.seatText}>{seat.id}</Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            </ImageBackground>
            <Text>Heloo</Text>
          </ScrollView>
        </React.Fragment>
      </CustomSafeAreaView>
    </View>
  );
};

export default SeatOptionsScreen;

const styles = StyleSheet.create({
  seatGrid: {
    marginTop: 20,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 5,
  },
  seat: {
    width: 50,
    height: 50,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  availableSeat: {
    backgroundColor: "#C3C7F1",
  },
  bookedSeat: {
    backgroundColor: "#3841A3",
  },
  unavailableSeat: {
    backgroundColor: " #D1D1D1",
  },
  seatText: {
    fontSize: 10,
    color: "white",
    marginTop: 2,
  },
});
