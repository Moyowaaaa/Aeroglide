import { screenWidth } from "@/constants";
import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";

const SkeletonLoader = () => {
  const shimmerAnimation = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(shimmerAnimation.current, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [shimmerAnimation]);

  const translateX = shimmerAnimation.current.interpolate({
    inputRange: [0, 1],
    outputRange: [-screenWidth, screenWidth],
  });

  return (
    <View style={styles.skeletonLoader}>
      <View style={styles.loadingStrip}>
        <Animated.View
          style={[styles.shimmerEffect, { transform: [{ translateX }] }]}
        />
      </View>

      <View style={[styles.loadingStrip, styles.loadingStripSmall]}>
        <Animated.View
          style={[styles.shimmerEffect, { transform: [{ translateX }] }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  skeletonLoader: {
    backgroundColor: "#f6f6f6",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    gap: 10,
    paddingBottom: 16,
    paddingLeft: 16,
    borderRadius: 10,
    minHeight: "100%",
    position: "absolute",
    top: 0,
  },
  loadingStrip: {
    width: "50%",
    height: 24,
    backgroundColor: "#e7e7e7",
    overflow: "hidden",
    position: "relative",
    borderRadius: 4,
  },
  loadingStripSmall: {
    width: "40%",
  },
  shimmerEffect: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor:
      "linear-gradient(90deg, rgba(231,231,231,1) 25%, rgba(224,224,224,1) 50%, rgba(231,231,231,1) 75%)",
    width: "100%",
    height: "100%",
  },
});

export default SkeletonLoader;
