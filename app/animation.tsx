import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import CustomSafeAreaView from "@/components/general/CustomSafeAreaView";
import { colors, screenWidth } from "@/constants";

const AnimationScreen = () => {
  const authTabs = ["Phone Number", "Email"];
  const [selectedTab, setSelectedTab] = useState<string>(authTabs[0]);

  const backgroundPositionX = useSharedValue(0);
  const tabWidth = screenWidth / authTabs.length;

  const onTabPress = (index: number) => {
    setSelectedTab(authTabs[index]);
    backgroundPositionX.value = withTiming(index * tabWidth, {
      duration: 300,
      easing: Easing.inOut(Easing.exp),
    });
  };

  const animatedBackgroundStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: backgroundPositionX.value }],
  }));

  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <View style={styles.tabWrapper}>
          <Animated.View
            style={[
              styles.movingBackground,
              animatedBackgroundStyle,
              { width: tabWidth },
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
                  selectedTab === tab && { color: colors.white },
                ]}
              >
                {tab}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </CustomSafeAreaView>
  );
};

export default AnimationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabWrapper: {
    width: "90%",
    height: 50,
    borderRadius: 8,
    overflow: "hidden",
    flexDirection: "row",
    position: "relative",
    borderWidth: 1,
    borderColor: colors.blue,
    backgroundColor: colors.white,
  },
  movingBackground: {
    position: "absolute",
    height: "100%",
    backgroundColor: colors.blue,
    borderRadius: 8,
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    fontSize: 16,
    color: colors.blue,
    fontWeight: "bold",
  },
});
