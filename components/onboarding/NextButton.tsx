import { colors } from "@/constants";
import { AntDesign } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle, G } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const NextButton = ({
  percentage,
  onPress,
}: {
  percentage: number;
  onPress: () => void;
}) => {
  const size = 70;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const progressAnimation = useSharedValue(circumference);

  useEffect(() => {
    progressAnimation.value = withTiming(
      circumference - (circumference * percentage) / 100,
      { duration: 500, easing: Easing.inOut(Easing.exp) }
    );
  }, [percentage]);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: progressAnimation.value,
  }));

  return (
    <View style={{ alignItems: "center", position: "relative" }}>
      <Svg width={size} height={size}>
        <G rotation={-90} origin={`${center}, ${center}`}>
          <Circle
            stroke={colors.grey}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <AnimatedCircle
            stroke={colors.blue}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            animatedProps={animatedProps} // Apply animation
            fill="none"
          />
        </G>
      </Svg>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <AntDesign name="arrowright" size={20} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blue,
    padding: 12.5,
    borderRadius: 35,
    position: "absolute",
    top: 12.5,
    alignSelf: "center",
  },
});
