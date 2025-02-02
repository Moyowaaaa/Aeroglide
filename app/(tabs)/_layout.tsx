import { Tabs, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { Home, Ticket } from "iconsax-react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants";
import { BackHandler } from "react-native";

const HomeLayout = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const handleBackPress = () => {
      const currentRoute =
        navigation.getState().routes[navigation.getState().index]?.name;
      if (currentRoute === "(tabs)") {
        return true;
      }
      return false;
    };
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, [navigation]);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor: colors.darkGrey,
        animation: "shift",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Home
              size={22}
              variant="Bold"
              color={focused ? colors.blue : colors.darkGrey}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          title: "Book Flight",
          tabBarIcon: ({ focused }) => (
            <Ticket
              size={22}
              variant="Bold"
              color={focused ? colors.blue : colors.darkGrey}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="earth"
              size={22}
              color={focused ? colors.blue : colors.darkGrey}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default HomeLayout;
