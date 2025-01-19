import { CustomButton } from "@/components/general/CustomButton";
import { colors, fontTypes, isAndroid, textType } from "@/constants";
import { BookingContext } from "@/context/BookingContext";
import { flightSearchContext } from "@/context/FlightContext";
import { formatDateWithSuffix } from "@/utils";
import React, { useContext } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { ImportCurve } from "iconsax-react-native";

const TicketInfo = () => {
  const { bookingDetails } = useContext(BookingContext);
  const { flightDetails } = useContext(flightSearchContext);

  const ticketInformation = [
    { title: "Flight No.", info: "BC 822" },
    { title: "Class.", info: "Business" },
    { title: "Ticket ID.", info: "9DF891P" },
    { title: "Passenger(s)", info: `${flightDetails?.seats} Adult` },
    { title: "Baggage", info: "20kg" },
    { title: "Boarding", info: "04:30 AM" },
  ];

  return (
    <View style={{ width: "100%", height: "100%", zIndex: 100 }}>
      <ImageBackground
        source={require("@/assets/images/glass.png")}
        resizeMode="cover"
        style={{
          height: "100%",
          width: "100%",
          paddingTop: 42,
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <View
          style={{
            height: "65%",
            width: "100%",
            borderColor: "red",

            gap: 32,
          }}
        >
          <View
            style={{
              ...styles.shadowContainer,
              alignSelf: "center",
            }}
          >
            <View
              style={{
                width: "90%",
                alignSelf: "center",
                paddingVertical: 20,
                justifyContent: "space-between",
                gap: 2,
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: isAndroid ? 0 : 10,
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.white,
                    fontFamily: fontTypes.regular,
                  }}
                >
                  {" "}
                  {flightDetails.from?.airport.callSign},{" "}
                  {flightDetails?.from?.name?.split(" ")[1]}
                </Text>
                <Text
                  style={{
                    fontSize: 26,
                    color: colors.white,
                    fontFamily: fontTypes.regular,
                  }}
                >
                  {flightDetails.from?.name
                    .split(" ")[0]
                    .slice(0, 3)
                    .toUpperCase()}
                </Text>
                <Text
                  style={{
                    fontFamily: fontTypes.regular,
                    fontSize: 12,
                    color: colors.white,
                  }}
                >
                  {formatDateWithSuffix(flightDetails?.departure).slice(0, 8)},{" "}
                  {bookingDetails?.departureTime}
                </Text>
              </View>

              <Image
                source={require("@/assets/images/whiteDistanceIndicator.png")}
                style={{ width: 135, height: 40 }}
              />

              <View style={{ alignItems: "flex-end" }}>
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.white,
                    fontFamily: fontTypes.regular,
                  }}
                >
                  {" "}
                  {flightDetails.to?.airport.callSign},{" "}
                  {flightDetails?.to?.name?.split(" ")[1]}
                </Text>

                <Text
                  style={{
                    fontSize: 26,
                    color: colors.white,
                    fontFamily: fontTypes.regular,
                  }}
                >
                  {flightDetails.to?.name
                    .split(" ")[0]
                    .slice(0, 3)
                    .toUpperCase()}
                </Text>
                <Text
                  style={{
                    fontFamily: fontTypes.regular,
                    fontSize: 12,
                    color: colors.white,
                  }}
                >
                  {flightDetails?.arrival && (
                    <Text>
                      {formatDateWithSuffix(flightDetails?.arrival).slice(0, 8)}
                      ,
                    </Text>
                  )}{" "}
                  {bookingDetails?.arrivalTime}
                </Text>
              </View>
            </View>

            <Image
              source={require("@/assets/images/ticketPlane.png")}
              style={{
                objectFit: "fill",
                width: isAndroid ? "100%" : "90%",
                alignSelf: "center",
              }}
            />

            <View style={{ width: "90%", alignSelf: "center", gap: 10 }}>
              <View
                style={{
                  width: "90%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  alignSelf: "center",
                  flexWrap: "wrap",
                  gap: 12,
                  marginTop: 10,
                }}
              >
                {ticketInformation?.map((ticket, index) => (
                  <View
                    style={{ gap: 2, minWidth: "25%", marginBottom: 20 }}
                    key={index}
                  >
                    <Text
                      style={{
                        color: colors.grey,
                        fontFamily: fontTypes.regular,
                        fontSize: 14,
                      }}
                    >
                      {ticket.title}
                    </Text>
                    <Text
                      style={{
                        ...textType.subHeader,
                        color: colors.darkBlue,
                        // fontFamily: fontTypes.semiBold,
                        fontSize: 14,
                      }}
                    >
                      {ticket.info}
                    </Text>
                  </View>
                ))}
              </View>

              <View
                style={{
                  width: "90%",
                  alignSelf: "center",
                  paddingVertical: 10,
                }}
              >
                <View style={{ gap: 2, minWidth: "25%" }}>
                  <Text
                    style={{
                      color: colors.black,
                      fontFamily: fontTypes.regular,
                      fontSize: 24,
                    }}
                  >
                    Authur M.
                  </Text>
                  <Text
                    style={{
                      color: colors.grey,
                      fontFamily: fontTypes.regular,
                      fontSize: 10,
                    }}
                  >
                    authur@rdr2.com
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            height: "20%",
            gap: 16,
            justifyContent: "flex-end",

            paddingBottom: 20,
          }}
        >
          <Image
            source={require("@/assets/images/dashedLine.png")}
            style={{ width: "70%", height: 1, alignSelf: "center" }}
          />

          <View style={{ gap: 2, paddingTop: 10 }}>
            <Text
              style={{
                color: colors.black,
                fontFamily: fontTypes.regular,
                fontSize: 14,
                textAlign: "center",
              }}
            >
              BOARDING PASS
            </Text>
            <Image
              source={require("@/assets/images/barcode.png")}
              style={{ width: "50%", height: 46, alignSelf: "center" }}
            />
          </View>
        </View>
        <CustomButton
          type="primary"
          width={"90%"}
          style={{ alignSelf: "center", marginTop: 32 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <Text
              style={{
                ...textType.paragraph,
                color: colors.white,
              }}
            >
              Download
            </Text>
            <ImportCurve variant="Outline" size={24} color={colors.white} />
          </View>
        </CustomButton>
      </ImageBackground>
    </View>
  );
};

export default TicketInfo;

const styles = StyleSheet.create({
  shadowContainer: {
    width: "90%",
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
});
