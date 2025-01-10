import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { colors, isAndroid, textType } from "@/constants";
import { CustomButton } from "../general/CustomButton";
import { locations } from "@/constants/data";
import { format } from "date-fns";
import { formatDateWithSuffix } from "@/utils";
import { router } from "expo-router";
import { flightSearchContext } from "@/context/FlightContext";
import { flightTicket, location } from "@/constants/types";
import LocationPicker from "../general/LocationPicker";

const FlightSearch = () => {
  const { flightDetails, setFlightDetails } = useContext(flightSearchContext);
  const [showDepartureDate, setShowDepartureDate] = useState(!isAndroid);
  const [showReturnDate, setShowReturnDate] = useState(!isAndroid);
  const [showFromPicker, setShowFromPicker] = useState(false);
  const [showToPicker, setShowToPicker] = useState(false);

  interface DateTimePickerEvent {
    type: string;
    nativeEvent: any;
  }

  const onChangeDeparture = (
    event: DateTimePickerEvent,
    selectedDate?: Date | undefined
  ) => {
    const currentDate = selectedDate || flightDetails.departure;
    setShowDepartureDate(!isAndroid);
    setFlightDetails({
      ...flightDetails,
      departure: currentDate,
    });
  };

  const onChangeReturn = (
    event: DateTimePickerEvent,
    selectedDate?: Date | undefined
  ) => {
    const currentDate = selectedDate || flightDetails.arrival;
    setShowReturnDate(!isAndroid);
    setFlightDetails({
      ...flightDetails,
      arrival: currentDate,
    });
  };

  const onSearchFlights = () => {
    router.push({
      pathname: "/(tabs)/booking",
    });
  };

  const onChangeFromLocation = (location: location) => {
    setFlightDetails({
      ...flightDetails,
      from: location,
    });
  };

  const onChangeToLocation = (location: any) => {
    setFlightDetails({
      ...flightDetails,
      to: location,
    });
  };

  return (
    <View
      style={{
        gap: 16,
        padding: 10,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: "#E0E0E0",
      }}
    >
      <View
        style={{
          gap: 4,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: "48%",
            backgroundColor: "white",
            paddingVertical: 6,
            gap: 6,
          }}
        >
          <Text
            style={{
              ...textType.paragraph,
              color: colors.teal,
              paddingLeft: 6,
            }}
          >
            Departure
          </Text>

          {isAndroid && (
            <TouchableOpacity
              style={{ marginLeft: 6 }}
              onPress={() => setShowDepartureDate(true)}
            >
              {!(flightDetails as flightTicket)?.departure ? (
                <Text>Select Date</Text>
              ) : (
                <Text>{formatDateWithSuffix(flightDetails.departure)}</Text>
              )}
            </TouchableOpacity>
          )}

          {showDepartureDate && (
            <DateTimePicker
              value={flightDetails.departure}
              style={{ width: "48%" }}
              mode="date"
              display="default"
              onChange={onChangeDeparture}
            />
          )}
        </View>

        <View
          style={{
            width: "48%",
            backgroundColor: "white",
            paddingVertical: 6,
            gap: 6,
          }}
        >
          <Text
            style={{
              ...textType.paragraph,
              color: colors.teal,
              paddingLeft: 6,
            }}
          >
            Return
          </Text>

          {isAndroid && (
            <TouchableOpacity
              style={{ marginLeft: 6 }}
              onPress={() => setShowReturnDate(true)}
            >
              {!flightDetails.arrival ? (
                <Text>Select Date</Text>
              ) : (
                <Text>{formatDateWithSuffix(flightDetails.arrival)}</Text>
              )}
            </TouchableOpacity>
          )}

          {showReturnDate && (
            <DateTimePicker
              value={flightDetails.arrival}
              style={{ width: "48%" }}
              mode="date"
              display="default"
              onChange={onChangeReturn}
            />
          )}
        </View>
      </View>

      <View style={{ paddingVertical: 2, backgroundColor: "white" }}>
        <Text
          style={{
            ...textType.paragraph,
            color: colors.teal,
            paddingLeft: 6,
          }}
        >
          From
        </Text>

        <LocationPicker
          items={locations}
          selectedValue={flightDetails?.from}
          onSelect={(location) => onChangeFromLocation(location)}
          show={showFromPicker}
          setShow={setShowFromPicker}
        />
      </View>

      <View style={{ paddingVertical: 2, backgroundColor: "white" }}>
        <Text
          style={{
            ...textType.paragraph,
            color: colors.teal,
            paddingLeft: 6,
          }}
        >
          To
        </Text>

        <LocationPicker
          items={locations}
          selectedValue={flightDetails?.to}
          onSelect={(location) => onChangeToLocation(location)}
          show={showToPicker}
          setShow={setShowToPicker}
        />
      </View>

      <View
        style={{
          gap: 4,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: "48%",
            backgroundColor: "white",
            paddingVertical: 6,
            gap: 6,
            flexDirection: "row",
          }}
        >
          <TextInput
            style={{
              ...styles.textInput,
              ...textType.paragraph,
              paddingVertical: 8,
            }}
            value={flightDetails?.seats}
            onChangeText={(val) =>
              setFlightDetails({
                ...flightDetails,
                seats: parseInt(val),
              })
            }
            inputMode="numeric"
            placeholder="Seat"
          />
          <View style={styles.iconContainer}>
            <Text style={{ color: colors.darkGrey, ...textType.paragraph }}>
              Person{flightDetails.seats > 1 && `s`}
            </Text>
          </View>
        </View>

        <View
          style={{
            width: "48%",
            backgroundColor: "white",
            paddingVertical: 6,
            gap: 6,
          }}
        >
          <TextInput
            style={{
              ...styles.textInput,
              ...textType.paragraph,
              paddingVertical: 8,
            }}
            placeholder="Seat Class"
            placeholderTextColor={colors.teal}
          />
        </View>
      </View>

      <CustomButton
        type="primary"
        width="100%"
        disabled={false}
        onPress={() => onSearchFlights()}
      >
        <Text style={{ fontSize: 16, color: "white" }}>Search Tickets</Text>
      </CustomButton>
    </View>
  );
};

export default FlightSearch;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#E5E5E7",
    flexDirection: "row",
    borderRadius: 8,
  },
  textInput: {
    flex: 1,
    paddingVertical: 12,
    paddingLeft: 10,
    fontSize: 23,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderLeftWidth: 1,
    borderLeftColor: "#d6d6d6",
  },
});
