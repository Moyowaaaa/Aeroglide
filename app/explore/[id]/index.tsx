import { CustomButton } from "@/components/general/CustomButton";
import SkeletonLoader from "@/components/general/SkeletonLoader";
import { colors, fontTypes, isAndroid, textType } from "@/constants";
import { faqs, locations } from "@/constants/data";
import { splitAmountByThousands } from "@/utils";
import { FontAwesome6, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const LocationScreen = () => {
  const { location } = useLocalSearchParams();
  const [openSectionIndex, setOpenSectionIndex] = useState(-1);

  const place = useMemo(() => {
    if (location) {
      const foundLocation = locations.find((a) => a.name === location);
      if (foundLocation) return foundLocation;
    }
    return null;
  }, [location]);

  const onClick = (index: number) => {
    setOpenSectionIndex((prevIndex) => {
      if (prevIndex === index) {
        return -1;
      } else {
        return index;
      }
    });
  };

  return (
    <React.Fragment>
      <StatusBar
        barStyle={
          isAndroid
            ? "dark-content"
            : `${place?.statusBarAccent || "light-content"}`
        }
      />
      {!place ? (
        <Text> Location not found</Text>
      ) : (
        <ScrollView className="w-full flex-1  pb-64 ">
          <View style={{ height: 450, width: "100%" }}>
            <ImageBackground
              resizeMode="cover"
              className="h-[100%] w-full px-4 z-10"
              source={
                (place.largeImage as ImageSourcePropType) ||
                (place.image as ImageSourcePropType)
              }
            />
            <SkeletonLoader />
          </View>

          <View style={{ gap: 24, marginTop: 24, paddingHorizontal: 10 }}>
            <View className="flex-row items-center justify-between flex-1">
              <View style={{ gap: 4 }}>
                <Text
                  style={{
                    ...textType.header,
                    color: colors.black,
                    fontSize: 26,
                    maxWidth: 250,
                  }}
                >
                  {place.name.split(" ")[0]}, {place.name.split(" ")[1]}{" "}
                  {place.name.split(" ")[2]} {place.name.split(" ")[3]}
                </Text>

                <View className="flex-row gap-2 items-center">
                  <Ionicons name="star" color={colors.orange} size={16} />
                  <Text
                    style={{
                      ...textType.paragraph,
                      fontSize: 14,
                      color: colors.darkGrey,
                    }}
                  >
                    {place.stars}
                  </Text>
                </View>
              </View>

              <View style={{ gap: 4, alignItems: "flex-end" }}>
                <Text
                  style={{
                    ...textType.subHeader,
                    fontSize: 24,
                    color: colors.orange,
                  }}
                >
                  ${splitAmountByThousands(place.cost)}
                </Text>
                <Text
                  style={{
                    ...textType.paragraph,
                    fontSize: 14,
                    color: colors.darkGrey,
                  }}
                >
                  *Estimated Cost
                </Text>
              </View>
            </View>

            <View>
              <Text
                style={{
                  ...textType.paragraph,
                  fontFamily: fontTypes.regular,
                  fontSize: 16,
                  color: colors.darkGrey,
                }}
              >
                {place.desc}
              </Text>
            </View>

            <View
              className="w-full 
              flex-row items-center justify-between
            "
            >
              <View className="w-6/12 border-2 border-[#e6e6e6] rounded-xl p-6 ">
                <Text
                  style={{
                    ...textType.subHeader,
                    fontSize: 12,
                  }}
                >
                  Airport
                </Text>
                <Text
                  style={{
                    ...textType.header,
                    fontSize: 32,
                  }}
                >
                  {place.airport.callSign}
                </Text>
                <Text
                  style={{
                    ...textType.paragraph,
                    fontSize: 12,
                    color: colors.grey,
                  }}
                >
                  {place.airport.distanceFromCity} from city center
                </Text>
              </View>

              <View className="w-5/12  rounded-xl justify-between gap-6  ">
                <View className="flex-row gap-4 items-start">
                  <FontAwesome6
                    name="location-dot"
                    size={24}
                    color={colors.red}
                  />

                  <View>
                    <Text
                      style={{
                        ...textType.subHeader,
                        fontSize: 15,
                        color: colors.black,
                      }}
                    >
                      {splitAmountByThousands(place.distance)} KM
                    </Text>

                    <Text
                      style={{
                        ...textType.paragraph,
                        fontSize: 15,
                        color: colors.grey,
                      }}
                    >
                      Distance
                    </Text>
                  </View>
                </View>

                <View className="flex-row gap-4 items-start">
                  <MaterialIcons name="wb-sunny" size={24} color="black" />

                  <View>
                    <Text
                      style={{
                        ...textType.subHeader,
                        fontSize: 15,
                        color: colors.black,
                      }}
                    >
                      {place.currentWhether} C
                    </Text>

                    <Text
                      style={{
                        ...textType.paragraph,
                        fontSize: 15,
                        color: colors.grey,
                      }}
                    >
                      Temp
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ width: "100%", gap: 10 }}>
              {faqs.map((faq, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    backgroundColor: colors.white,
                    paddingVertical: 10,
                    paddingHorizontal: 12,
                    borderRadius: 8,
                    gap: 6,
                  }}
                  onPress={() => onClick(index)}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        ...textType.subHeader,
                        fontSize: 16,
                        color: colors.black,
                      }}
                    >
                      {faq.question}
                    </Text>
                    <Ionicons
                      name={
                        openSectionIndex === index
                          ? "chevron-up"
                          : "chevron-down"
                      }
                      size={24}
                      color={colors.blue}
                      onPress={() => onClick(index)}
                    />
                  </View>
                  {openSectionIndex === index && (
                    <Text
                      style={{
                        ...textType.paragraph,
                        fontSize: 14,
                        color: colors.darkGrey,
                      }}
                    >
                      {faq.answer}
                    </Text>
                  )}
                </TouchableOpacity>
              ))}
            </View>

            <View style={{ marginVertical: 64 }}>
              <CustomButton
                type="primary"
                width="100%"
                disabled={false}
                onPress={() => router.navigate("/(tabs)")}
              >
                <Text style={{ fontSize: 16, color: "white" }}>Book Now</Text>
              </CustomButton>
            </View>
          </View>
        </ScrollView>
      )}
    </React.Fragment>
  );
};

export default LocationScreen;
