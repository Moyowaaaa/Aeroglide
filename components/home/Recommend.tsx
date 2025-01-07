import { colors, TextType } from "@/constants";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { ArrowRight2 } from "iconsax-react-native";
import LocationCard from "../general/LocationCard";
import { locations } from "@/constants/data";
import { Link } from "expo-router";

const Recommend = () => {
  return (
    <View style={{ marginVertical: 20, gap: 10 }}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            ...TextType.subHeader,
            fontSize: 15,
            color: colors.black,
          }}
        >
          Recommended
        </Text>

        <Link href={"/(home)/explore"}>
          <View
            style={{
              flexDirection: "row",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Text>See All</Text>
            <ArrowRight2 size={20} variant="Outline" color={colors.darkGrey} />
          </View>
        </Link>
      </View>

      <ScrollView horizontal style={{ gap: 32 }}>
        {locations?.map((location, index) => (
          <LocationCard key={index} location={location} cardHeight="short" />
        ))}
      </ScrollView>
    </View>
  );
};

export default Recommend;
