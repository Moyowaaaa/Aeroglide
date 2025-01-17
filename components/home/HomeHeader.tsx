import { colors, textType } from "@/constants";
import React, { useMemo } from "react";
import { Text, View } from "react-native";

const HomeHeader = () => {
  const currentGreeting = useMemo(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return "Good Morning";
    } else if (currentHour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  }, []);

  return (
    <View
      className="flex-row items-center w-full 
  justify-between
 "
    >
      <View style={{ gap: 2 }}>
        <Text
          style={{
            ...textType.paragraph,
            fontSize: 15,
            color: colors.grey,
          }}
        >
          Hello {currentGreeting}
        </Text>

        <Text
          style={{
            ...textType.header,
            fontSize: 21,
            color: colors.black,
          }}
        >
          Where are you going?
        </Text>
      </View>

      {/* <Image
        source={require("../../assets/images/avatar.png")}
        alt=""
        resizeMode="cover"
        className="h-[20px] w-[20px] border-2 border-"
      /> */}
    </View>
  );
};

export default HomeHeader;
