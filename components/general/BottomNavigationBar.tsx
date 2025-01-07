import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Home, Ticket } from "iconsax-react-native";
import React from "react";
import { Text, View } from "react-native";

const BottomNavigationBar = ({}) => {
  const routes = [
    { name: "index", icon: <Home size={30} variant="Outline" color="red" /> },
    {
      name: "booking",
      icon: <Ticket size={30} variant="Outline" color="red" />,
    },
    {
      name: "explore",
      icon: <Ionicons size={30} name="planet" color="red" />,
    },
  ];

  return (
    <View className="flex-row w-full border-2 border-[red]">
      <Text>Bottom Navbar</Text>
    </View>
  );
};

export default BottomNavigationBar;
