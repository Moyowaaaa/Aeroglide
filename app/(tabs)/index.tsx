import CustomSafeAreaView from "@/components/general/CustomSafeAreaView";
import FlightSearch from "@/components/home/FlightSearch";
import HomeBanner from "@/components/home/HomeBanner";
import HomeHeader from "@/components/home/HomeHeader";
import Recommend from "@/components/home/Recommend";
import { Link } from "expo-router";

import React from "react";
import { ImageBackground, ScrollView, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <CustomSafeAreaView>
      <ScrollView className="w-full flex-1  pb-6 ">
        <ImageBackground
          source={require("../../assets/images/largeImageBackground.png")}
          resizeMode="cover"
          className="h-[70%] w-full px-4"
        >
          <Link href={"/animation"}>
            <Text>Hello</Text>
          </Link>
          <HomeHeader />
          <HomeBanner />

          <FlightSearch />
        </ImageBackground>
        <ImageBackground
          source={require("../../assets/images/largeImageBackground.png")}
          resizeMode="cover"
          className="h-[35%]  w-full px-4"
        >
          <Recommend />
        </ImageBackground>
      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default HomeScreen;
