import CustomSafeAreaView from "@/components/general/CustomSafeAreaView";
import { colors, fontTypes, isAndroid, textType } from "@/constants";
import { locations } from "@/constants/data";
import { location } from "@/constants/types";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import React, { useMemo } from "react";
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";

const LocationScreen = () => {
  const { location } = useLocalSearchParams();
  const place = useMemo(() => {
    if (location) {
      const foundLocation = locations.find((a) => a.name === location);
      if (foundLocation) return foundLocation;
    }
    return null;
  }, [location]);

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
        <ScrollView className="w-full flex-1  pb-6 ">
          <View style={{ height: 450, width: "100%" }}>
            <ImageBackground
              resizeMode="cover"
              className="h-[100%] w-full px-4"
              source={place.images as any}
            />
          </View>

          <View style={{ gap: 24, marginTop: 24, paddingHorizontal: 10 }}>
            <View className="flex-row items-center justify-between flex-1">
              <View style={{ gap: 4 }}>
                <Text
                  style={{
                    ...textType.header,
                    color: colors.black,
                    fontSize: 26,
                    maxWidth: 300,
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
                  ${place.cost}
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
          </View>
        </ScrollView>
      )}
    </React.Fragment>
  );
};

export default LocationScreen;
