import { authTabs } from "@/app/(auth)";
import { colors, screenWidth } from "@/constants";
import React, { SetStateAction, useState } from "react";
import { Keyboard, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const AuthTabSwitcher = ({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: string;
  setSelectedTab: React.Dispatch<SetStateAction<string>>;
}) => {
  const backgroundOpacity = useSharedValue(1);
  const backgroundPositionX = useSharedValue(0);
  const containerPadding = 16;
  const tabWidth = (screenWidth - containerPadding * 2) / authTabs.length;

  const onTabPress = (index: number) => {
    setSelectedTab(authTabs[index]);
    Keyboard.dismiss();
    backgroundOpacity.value = withTiming(0, {
      duration: 150,
      easing: Easing.inOut(Easing.exp),
    });

    backgroundPositionX.value = withTiming(index * tabWidth, {
      duration: 300,
      easing: Easing.inOut(Easing.exp),
    });

    backgroundOpacity.value = withTiming(1, {
      duration: 150,
      easing: Easing.inOut(Easing.exp),
    });
  };

  const animatedBackgroundStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: backgroundPositionX.value }],
    opacity: backgroundOpacity.value,
  }));

  return (
    <View
      style={{
        width: "100%",
        padding: 6,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#F3F4FF",
        paddingHorizontal: 10,
        overflow: "hidden",
        flexDirection: "row",
        position: "relative",
        justifyContent: "space-between",
      }}
    >
      <Animated.View
        style={[
          animatedBackgroundStyle,
          styles.animatedBackground,

          {
            width: tabWidth - 20,
            marginLeft: selectedTab === authTabs[0] ? 10 : 0,
          },
        ]}
      />

      {authTabs.map((tab, index) => (
        <Pressable
          key={index}
          style={styles.tab}
          onPress={() => onTabPress(index)}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === tab && { color: colors.black },
            ]}
          >
            {tab}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default AuthTabSwitcher;

const styles = StyleSheet.create({
  animatedBackground: {
    position: "absolute",
    backgroundColor: colors.white,
    height: 48,
    borderRadius: 45,
    bottom: 6,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "48%",
    borderRadius: 45,
  },
  tabText: {
    fontSize: 16,
    color: colors.darkGrey,
    fontWeight: "bold",
  },
});
