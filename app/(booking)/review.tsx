import TopBar from "@/components/booking/TopBar";
import CustomSafeAreaView from "@/components/general/CustomSafeAreaView";
import { colors, textType } from "@/constants";
import { BookingContext } from "@/context/BookingContext";
import { flightSearchContext } from "@/context/FlightContext";
import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { InfoCircle } from "iconsax-react-native";
import { CustomButton } from "@/components/general/CustomButton";
import { useRouter } from "expo-router";

const BookingReviewScreen = () => {
  const { bookingDetails } = useContext(BookingContext);
  const { flightDetails } = useContext(flightSearchContext);
  const router = useRouter();

  return (
    <CustomSafeAreaView>
      <View
        style={{
          paddingHorizontal: 10,
          flex: 1,
          gap: 16,
          position: "relative",
        }}
      >
        <TopBar title={`${`Review`}`} canGoBack={true} />

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 10,
            paddingVertical: 20,
            //   paddingVertical: 15,
            gap: 6,
            borderColor: "rgba(0, 0, 0, 0.05)",
            borderWidth: 1,
            borderRadius: 6,
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
                style={{ width: 20, height: 20 }}
              />

              <Text
                style={{
                  ...textType.paragraph,
                  fontSize: 12,
                  color: colors.black,
                }}
              >
                |{" "}
                {bookingDetails?.airline?.planes[Math.floor(Math.random() * 2)]}
              </Text>
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
              {bookingDetails?.departureTime}
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
              {bookingDetails?.arrivalTime}
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
                fontSize: 12,
                color: colors.grey,
              }}
            >
              {flightDetails?.from?.name?.split(" ")[0]}
            </Text>
            <Text
              style={{
                ...textType.paragraph,
                fontSize: 12,
                color: colors.black,
              }}
            >
              {bookingDetails?.time?.duration} hr
            </Text>

            <Text
              style={{
                ...textType.paragraph,
                fontSize: 12,
                color: colors.grey,
              }}
            >
              {flightDetails?.to?.name?.split(" ")[0]}
            </Text>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            paddingVertical: 20,
            paddingHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            borderRadius: 6,
            backgroundColor: "#E8F2FED4",
          }}
        >
          <InfoCircle variant="Outline" color={"#0061DB"} size={32} />
          <Text
            style={{
              ...textType.paragraph,
            }}
          >
            This ticket is not refundable and cant’t be rescheduled.
            <Text
              style={{
                ...textType.paragraph,
                color: colors.blue,
              }}
            >
              Click here for more info.
            </Text>
          </Text>
        </View>

        <View style={{ gap: 4 }}>
          <Text
            style={{
              ...textType.subHeader,
              fontSize: 16,
            }}
          >
            Passenger Details
          </Text>
        </View>

        <View
          style={{
            borderColor: "rgba(0, 0, 0, 0.05)",
            borderWidth: 1,
            borderRadius: 6,
          }}
        >
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "rgba(0, 0, 0, 0.05)",
              padding: 20,
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{
                ...textType.subHeader,
                color: colors.darkGrey,
                fontSize: 18,
              }}
            >
              Authur Morgan
            </Text>
            <View
              style={{ flexDirection: "row", gap: 4, alignItems: "center" }}
            >
              <Text
                style={{
                  ...textType.subHeader,
                  color: colors.grey,
                  fontSize: 10,
                }}
              >
                Authur@rdr2.com
              </Text>
              <Text
                style={{
                  ...textType.subHeader,
                  color: colors.grey,
                  fontSize: 12,
                }}
              >
                +1454545454545
              </Text>
            </View>
          </View>
        </View>
        <View style={{ gap: 4 }}>
          <Text
            style={{
              ...textType.subHeader,
              fontSize: 16,
            }}
          >
            Flight Details
          </Text>

          <View
            style={{
              borderColor: "rgba(0, 0, 0, 0.05)",
              borderWidth: 1,
              borderRadius: 6,
            }}
          >
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "rgba(0, 0, 0, 0.05)",
                padding: 20,
                alignItems: "center",
                flexDirection: "row",
                gap: 4,
              }}
            >
              <MaterialCommunityIcons
                name="airplane-takeoff"
                size={24}
                color={colors.blue}
              />
              <Text>
                Departure: {flightDetails.from?.airport.callSign},{" "}
                {flightDetails.from?.name.split(" ")[0]} |{" "}
                {bookingDetails?.departureTime}
              </Text>
            </View>

            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "rgba(0, 0, 0, 0.05)",
                padding: 20,
                flexDirection: "row",
                alignItems: "center",

                gap: 4,
              }}
            >
              <MaterialCommunityIcons
                name="airplane-landing"
                size={24}
                color={colors.blue}
              />
              <Text>
                Arriving at: {flightDetails.to?.airport.callSign},{" "}
                {flightDetails.to?.name.split(" ")[0]} |{" "}
                {bookingDetails?.arrivalTime}
              </Text>
            </View>

            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "rgba(0, 0, 0, 0.05)",
                padding: 20,
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <FontAwesome6 name="stopwatch" size={24} color={colors.blue} />
              <Text>Duration: {bookingDetails?.time?.duration} hours</Text>
            </View>
          </View>
        </View>

        <CustomButton
          type="primary"
          width={"100%"}
          style={{
            alignSelf: "center",
            // position: "fixed",
            width: "100%",
            borderWidth: 2,
            bottom: 0,
          }}
          onPress={() => router.push("/(booking)/payment")}
        >
          <Text
            style={{
              ...textType.paragraph,
              color: colors.white,
            }}
          >
            Continue to Payment
          </Text>
        </CustomButton>
      </View>
    </CustomSafeAreaView>
  );
};

export default BookingReviewScreen;
