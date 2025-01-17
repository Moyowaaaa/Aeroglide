import React, { SetStateAction, useContext } from "react";
import { Image, Text, View } from "react-native";
import TopBar from "../booking/TopBar";
import { CustomButton } from "../general/CustomButton";
import { colors, textType } from "@/constants";
import { PaymentSteps } from "@/constants/types";
import { Octicons } from "@expo/vector-icons";
import { BookingContext } from "@/context/BookingContext";
import { flightSearchContext } from "@/context/FlightContext";
import { formatDateWithSuffix } from "@/utils";
import { useRouter } from "expo-router";

const PaymentSuccessful = ({
  setPaymentStep,
}: {
  setPaymentStep: React.Dispatch<SetStateAction<PaymentSteps>>;
}) => {
  const { bookingDetails } = useContext(BookingContext);
  const { flightDetails } = useContext(flightSearchContext);
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        position: "relative",
        paddingHorizontal: 20,
      }}
    >
      <View style={{ flex: 1, gap: 16, justifyContent: "space-between" }}>
        <TopBar>
          <View
            style={{
              flexDirection: "row",
              height: "auto",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  ...textType.paragraph,
                  fontSize: 20,
                  color: colors.black,
                }}
              >
                {flightDetails?.from?.name?.split(" ")[0]}
              </Text>

              <Text
                style={{
                  ...textType.paragraph,
                  fontSize: 12,
                  color: colors.grey,
                }}
              >
                {formatDateWithSuffix(flightDetails?.departure).slice(0, 8)},{" "}
                {bookingDetails?.departureTime}
              </Text>
            </View>

            <Octicons name="arrow-switch" size={24} color={colors.grey} />

            <View>
              <Text
                style={{
                  ...textType.paragraph,
                  fontSize: 20,
                  color: colors.black,
                }}
              >
                {flightDetails?.to?.name?.split(" ")[0]}
              </Text>

              <Text
                style={{
                  ...textType.paragraph,
                  fontSize: 12,
                  color: colors.grey,
                }}
              >
                {flightDetails?.arrival && (
                  <Text>
                    {formatDateWithSuffix(flightDetails?.arrival).slice(0, 8)},
                  </Text>
                )}{" "}
                {bookingDetails?.arrivalTime}
              </Text>
            </View>
          </View>
        </TopBar>

        <View style={{ width: "100%", height: 400 }}>
          <Image
            source={require("@/assets/images/paymentSuccessful.png")}
            resizeMode="contain"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
              alignSelf: "center",
            }}
          />
        </View>

        <View style={{ gap: 4 }}>
          <Text
            style={{
              ...textType.paragraph,
              fontSize: 30,
              textAlign: "center",
              color: colors.green,
            }}
          >
            Payment Successful!
          </Text>

          <Text
            style={{
              ...textType.paragraph,
              fontSize: 16,
              textAlign: "center",
              color: colors.darkGrey,
            }}
          >
            Congratulations, your payment was successfully processed.
          </Text>
        </View>

        <View style={{ gap: 20, marginVertical: 20 }}>
          <CustomButton
            type="primary"
            width={"100%"}
            style={{
              alignSelf: "center",
              width: "100%",
              //   borderWidth: 2,
            }}
            onPress={() => setPaymentStep("Ticket")}
          >
            <Text
              style={{
                ...textType.paragraph,
                color: colors.white,
              }}
            >
              Booking Details
            </Text>
          </CustomButton>
          <CustomButton
            type="base"
            width={"100%"}
            onPress={() => router.push("/(tabs)")}
          >
            <Text
              style={{
                ...textType.paragraph,
                color: colors.black,
              }}
            >
              Home
            </Text>
          </CustomButton>
        </View>
      </View>
    </View>
  );
};

export default PaymentSuccessful;
