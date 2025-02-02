import { Tabs } from "expo-router";
import React from "react";
import { Home, Ticket } from "iconsax-react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants";
import { usePreventBackNavigation } from "@/hooks/usePreventBackNavigation";

const HomeLayout = () => {
  usePreventBackNavigation("(tabs)");

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
