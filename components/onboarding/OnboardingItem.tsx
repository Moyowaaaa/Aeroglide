import React from "react";
import { Image, ImageSourcePropType, Dimensions } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

const OnboardingItem = ({
  onBoardingImage,
  x,
  currentViewIndex,
}: {
  onBoardingImage: ImageSourcePropType;
  x: SharedValue<number>;
  currentViewIndex: number;
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            x.value,
            [
              (currentViewIndex - 1) * width,
              currentViewIndex * width,
              (currentViewIndex + 1) * width,
            ],
            [-width * 0.5, 0, width * 0.5],
            Extrapolation.CLAMP
          ),
        },
        {
          scale: interpolate(
            x.value,
            [
              (currentViewIndex - 1) * width,
              currentViewIndex * width,
              (currentViewIndex + 1) * width,
            ],
            [0.9, 1, 0.9],
            Extrapolation.CLAMP
          ),
        },
      ],
      opacity: interpolate(
        x.value,
        [
          (currentViewIndex - 1) * width,
          currentViewIndex * width,
          (currentViewIndex + 1) * width,
        ],
        [0.3, 1, 0.3],
        Extrapolation.CLAMP
      ),
    };
  });

  return (
    <Animated.View
      style={[
        { width, alignItems: "center", position: "relative" },
        animatedStyle,
      ]}
    >
      <Image
        source={onBoardingImage}
        alt="Onboarding Image"
        resizeMode="contain"
        style={{
          width,
          height: 450,
        }}
      />
    </Animated.View>
  );
};

export default OnboardingItem;
