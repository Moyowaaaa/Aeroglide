import TopBar from "@/components/booking/TopBar";
import { CustomButton } from "@/components/general/CustomButton";
import CustomSafeAreaView from "@/components/general/CustomSafeAreaView";
import { colors, isAndroid, textType } from "@/constants";
import { BookingContext } from "@/context/BookingContext";
import { flightSearchContext } from "@/context/FlightContext";
import { splitAmountByThousands } from "@/utils";
import { useRouter } from "expo-router";
import React, { useContext } from "react";
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SheetManager } from "react-native-actions-sheet";

const BookingOptions = () => {
  const router = useRouter();

  const { bookingDetails } = useContext(BookingContext);
  const { flightDetails } = useContext(flightSearchContext);

  return (
    <CustomSafeAreaView>
      <View style={{ paddingHorizontal: 10, flex: 1, gap: 16 }}>
        <TopBar title={`${`Ticket Options`}`} canGoBack={true} />

        <TouchableOpacity
          style={{
            width: "100%",
            height: "auto",
            minHeight: 220,
          }}
          onPress={() => SheetManager.show("booking-sheet")}
        >
          <ImageBackground
            source={require("../../assets/images/ticket.png")}
            resizeMode="cover"
            className="h-full w-full px-4"
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              paddingVertical: 15,
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
                  {bookingDetails.airline.name}
                </Text>
                <Image
                  source={bookingDetails.airline.logo as ImageSourcePropType}
                  style={{ width: 20, height: 20 }}
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
                {bookingDetails.time.duration} hr
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
                {bookingDetails.departureTime}{" "}
              </Text>

              <Text
                style={{
                  ...textType.paragraph,
                  fontSize: 14,
                  color: colors.black,
                }}
              >
                {bookingDetails.arrivalTime}{" "}
              </Text>
            </View>
            <Image
              source={require("../../assets/images/dashedLine.png")}
              style={{ width: "90%", height: 1, marginTop: 15 }}
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
              <View
                style={{
                  paddingVertical: 4,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "90%",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity>
                  <Text
                    style={{
                      ...textType.subHeader,
                      fontSize: 14,
                      color: colors.blue,
                    }}
                    onPress={() => SheetManager.show("booking-sheet")}
                  >
                    View details
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <View
          style={{
            position: "absolute",
            backgroundColor: isAndroid ? "#F8F8FF" : "none",
            bottom: 0,
            alignSelf: "center",
            paddingVertical: 20,
            alignItems: "center",
          }}
          className="w-screen"
        >
          <View
            style={{
              width: "80%",
              flexDirection: "row",
              justifyContent: "space-between",
              flex: 1,
            }}
          >
            <View style={{ gap: 2 }}>
              <Text
                style={{
                  ...textType.paragraph,
                  fontSize: 12,
                  color: colors.grey,
                }}
              >
                Total Price
              </Text>
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

            <CustomButton
              type="primary"
              width={150}
              onPress={() => router.push("/(booking)/review")}
            >
              <Text
                style={{
                  ...textType.paragraph,
                  fontSize: 14,
                  color: colors.white,
                }}
              >
                Continue
              </Text>
            </CustomButton>
          </View>
        </View>
      </View>
    </CustomSafeAreaView>
  );
};

export default BookingOptions;
