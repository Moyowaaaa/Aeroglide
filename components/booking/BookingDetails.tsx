import { colors, textType } from "@/constants";
import { BookingContext } from "@/context/BookingContext";
import { flightSearchContext } from "@/context/FlightContext";
import { splitAmountByThousands } from "@/utils";
import React, { useContext } from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const BookingDetails = () => {
  const { bookingDetails } = useContext(BookingContext);
  const { flightDetails } = useContext(flightSearchContext);

  return (
    <TouchableOpacity style={{ width: "100%", height: "auto", minHeight: 220 }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 10,
          paddingVertical: 2,
          //   paddingVertical: 15,
          gap: 6,
          borderTopColor: colors.grey,
          borderBottomColor: colors.grey,
          borderTopWidth: 1,
          borderBottomWidth: 1,
        }}
      >
        <View
          style={{
            width: "90%",
            gap: 2,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
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
              {bookingDetails?.airline?.name}
            </Text>
            <Image
              source={bookingDetails?.airline?.logo as ImageSourcePropType}
              style={{ width: 20, height: 20, objectFit: "contain" }}
            />
          </View>
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
            gap: 1,
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
            style={{
              ...textType.paragraph,
              fontSize: 16,
              color: colors.black,
            }}
          >
            {bookingDetails?.time?.duration} hr
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
            gap: 1,
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
            {bookingDetails?.departureTime}{" "}
          </Text>

          <Text
            style={{
              ...textType.paragraph,
              fontSize: 14,
              color: colors.black,
            }}
          >
            {bookingDetails?.arrivalTime}{" "}
          </Text>
        </View>

        <View
          style={{
            paddingVertical: 4,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "90%",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 6,
              alignItems: "center",
              gap: 15,
              paddingVertical: 8,
              borderRadius: 6,
              backgroundColor: "#F4F8FB",
            }}
          >
            <Text
              style={{
                ...textType.subHeader,
                fontSize: 16,
                color: colors.darkGrey,
              }}
            >
              {flightDetails?.seats} ticket{flightDetails?.seats > 1 && `s`}
            </Text>
          </View>
          <Text
            style={{
              ...textType.header,
              fontSize: 20,
              color: colors.black,
            }}
          >
            $
            {splitAmountByThousands(
              bookingDetails?.cost * flightDetails?.seats
            )}
            .00
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BookingDetails;
