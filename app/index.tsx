import CustomSafeAreaView from "@/components/general/CustomSafeAreaView";
import { colors, isAndroid, textType } from "@/constants";
import { useRouter } from "expo-router";
import { Image, ImageBackground, Text, View, ViewToken } from "react-native";
import { useRef, useState } from "react";
import { onboardingImages, onBoardingScreens } from "@/constants/data";
import OnboardingItem from "@/components/onboarding/OnboardingItem";
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import NextButton from "@/components/onboarding/NextButton";

export default function Index() {
  const router = useRouter();
  const x = useSharedValue(0);
  const [currentViewIndex, setCurrentViewIndex] = useState<number>(0);
  const flatListRef = useAnimatedRef<Animated.FlatList<any>>();

  const viewabilityConfig = { itemVisiblePercentThreshold: 50 };

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems[0].index !== null) {
      setCurrentViewIndex(viewableItems[0].index);
    }
  };
  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);

  const onHandleScroll = useAnimatedScrollHandler({
    onScroll: (event) => (x.value = event.contentOffset.x),
  });

  const handleContinue = () => {
    if (currentViewIndex < 2) {
      flatListRef.current?.scrollToIndex({
        animated: true,
        index: currentViewIndex + 1,
        viewPosition: 0.5,
      });
      setCurrentViewIndex(currentViewIndex + 1);
    } else {
      router.push("/(auth)");
    }
  };

  return (
    <CustomSafeAreaView>
      <View style={{ flex: 1, position: "relative" }}>
        <ImageBackground
          source={require("../assets/images/imageBackground.png")}
          resizeMode="contain"
        >
          <View className="w-[160px] h-[90px] self-center mx-auto relative ">
            <Image
              source={require("../assets/images/logo.png")}
              alt=""
              className="w-full h-full object-contain"
              resizeMode="contain"
            />
          </View>

          <View
            style={{ height: isAndroid ? "70%" : "70%", position: "relative" }}
          >
            <Animated.FlatList
              ref={flatListRef}
              data={onboardingImages}
              horizontal
              renderItem={({ item, index }) => {
                return (
                  <OnboardingItem
                    onBoardingImage={item}
                    key={index}
                    currentViewIndex={currentViewIndex}
                    x={x}
                  />
                );
              }}
              pagingEnabled
              bounces={false}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(_, index) => index.toString()}
              onScroll={onHandleScroll}
              scrollEventThrottle={16}
              viewabilityConfigCallbackPairs={
                viewabilityConfigCallbackPairs.current
              }
            />
          </View>
        </ImageBackground>

        <View
          style={{
            width: "100%",
            height: "25%",
            justifyContent: "flex-start",
            position: "absolute",
            bottom: isAndroid ? 25 : 10,
          }}
        >
          <View className="gap-2">
            <Text
              style={{ ...textType.header }}
              className="max-w-[25rem]  mx-auto text-center"
            >
              {onBoardingScreens[currentViewIndex].text ?? ""}
            </Text>

            <Text
              style={{
                ...textType.paragraph,
                color: colors.grey,
              }}
              className="max-w-[25rem]  mx-auto text-center font-[600]"
            >
              {onBoardingScreens[currentViewIndex].desc ?? ""}
            </Text>

            <NextButton
              percentage={(currentViewIndex + 1) * (100 / 3)}
              onPress={handleContinue}
            />
          </View>
        </View>
      </View>
    </CustomSafeAreaView>
  );
}
