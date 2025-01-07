import React, { useState } from "react";
import {
  Button,
  View,
  Platform,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { colors, isAndroid, TextType } from "@/constants";
import { CustomButton } from "../general/CustomButton";

const FlightSearch = () => {
  const [departureDate, setDepartureDate] = useState(new Date());
  const [showDepartureDate, setShowDepartureDate] = useState(!isAndroid);
  const [returnDate, setReturnDate] = useState(new Date());
  const [showReturnDate, setShowReturnDate] = useState(!isAndroid);

  interface DateTimePickerEvent {
    type: string;
    nativeEvent: any;
  }

  const onChangeDeparture = (
    event: DateTimePickerEvent,
    selectedDate?: Date | undefined
  ) => {
    const currentDate = selectedDate || departureDate;
    setShowDepartureDate(!isAndroid);
    setDepartureDate(currentDate);
  };

  const onChangeReturn = (
    event: DateTimePickerEvent,
    selectedDate?: Date | undefined
  ) => {
    const currentDate = selectedDate || returnDate;
    setShowReturnDate(!isAndroid);
    setReturnDate(currentDate);
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
            // paddingLeft: 6,
            paddingVertical: 6,
            gap: 6,
          }}
        >
          <Text
            style={{
              ...TextType.paragraph,
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
              <Text>Select Date</Text>
            </TouchableOpacity>
          )}

          {showDepartureDate && (
            <DateTimePicker
              value={departureDate}
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
            // paddingLeft: 6,
            paddingVertical: 6,
            gap: 6,
          }}
        >
          <Text
            style={{
              ...TextType.paragraph,
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
              <Text>Select Date</Text>
            </TouchableOpacity>
          )}

          {showReturnDate && (
            <DateTimePicker
              value={returnDate}
              style={{ width: "48%" }}
              mode="date"
              display="default"
              onChange={onChangeReturn}
            />
          )}
        </View>
      </View>

      <View style={{ paddingVertical: 2, backgroundColor: "white" }}>
        <TextInput
          placeholder="From"
          placeholderTextColor={colors.teal}
          style={[styles.textInput, TextType.paragraph]}
        />
      </View>

      <View style={{ paddingVertical: 2, backgroundColor: "white" }}>
        <TextInput
          placeholder="To"
          placeholderTextColor={colors.teal}
          style={[styles.textInput, TextType.paragraph]}
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
            // paddingLeft: 6,
            paddingVertical: 6,
            gap: 6,
            flexDirection: "row",
          }}
        >
          <TextInput
            style={{
              ...styles.textInput,
              ...TextType.paragraph,
              paddingVertical: 8,
            }}
            placeholder="Seat"
          />
          <View style={styles.iconContainer}>
            <Text style={{ color: colors.darkGrey, ...TextType.paragraph }}>
              Person
            </Text>
          </View>
        </View>

        <View
          style={{
            width: "48%",
            backgroundColor: "white",
            // paddingLeft: 6,
            paddingVertical: 6,
            gap: 6,
          }}
        >
          <TextInput
            style={{
              ...styles.textInput,
              ...TextType.paragraph,
              paddingVertical: 8,
            }}
            placeholder="Seat Class"
            placeholderTextColor={colors.teal}
          />
        </View>
      </View>

      <CustomButton type="primary" width="100%" disabled={false}>
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
  },
  textInput: {
    flex: 1, // Take up available space
    paddingVertical: 12,
    paddingLeft: 10,
    fontSize: 23,
  },
  iconContainer: {
    justifyContent: "center", // Center the icon
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderLeftWidth: 1,
    borderLeftColor: "#d6d6d6", // Optional: separator between input and icon
  },
});
