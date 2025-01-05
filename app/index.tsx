import CustomSafeAreaView from "@/components/general/CustomSafeAreaView";
import NavigationBar from "@/components/general/NavigationBar";
import { colors, fontTypes, TextType } from "@/constants";
import { Link, useRouter } from "expo-router";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ArrowCircleRight2 } from "iconsax-react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function Index() {
  const router = useRouter();

  const onBoardingScreens: Record<
    number,
    { text: string; desc?: string; image: string }
  > = {
    0: {
      text: "Let's Fly Somewhere, Everywhere.",
      desc: "Make it easy for travelers to find and purchase the best deal on flights.",
      image: require("@/assets/images/plane.png"),
    },
    1: {
      text: "Discover flights to your dream destination",
      desc: "Planning a quick getaway or long haul adventure? Find, compare and book flight with ease",
      image: require("@/assets/images/discoverImage.png"),
    },
  };

  const [currentViewIndex, setCurrentViewIndex] = useState<number>(0);

  const handleContinue = () => {
    if (currentViewIndex < 1) {
      setCurrentViewIndex(currentViewIndex + 1);
    } else {
      router.push("/(auth)");
    }
  };

  return (
    <CustomSafeAreaView>
      <View className="flex-1 w-full ">
        <ImageBackground
          source={require("../assets/images/imageBackground.png")}
          resizeMode="cover"
        >
          <View className="h-[70%] w-full ">
            <View className="w-[160px] h-[90px] self-center mx-auto relative ">
              <Image
                source={require("../assets/images/logo.png")}
                alt=""
                className="w-full h-full object-contain"
                resizeMode="contain"
              />
            </View>

            <View className="w-full h-full  relative">
              <Image
                source={onBoardingScreens[currentViewIndex].image as any}
                alt=""
                className="w-full h-full object-contain absolute right-[-2rem]"
                resizeMode="contain"
              />
            </View>
          </View>
        </ImageBackground>

        <View className="justify-center h-[30%] ">
          <View className="gap-2">
            <Text
              style={{
                ...TextType.header,
              }}
              className="max-w-[25rem]  mx-auto text-center"
            >
              {onBoardingScreens[currentViewIndex].text ?? ""}
            </Text>

            <Text
              style={{
                ...TextType.paragraph,
                color: colors.grey,
              }}
              className="max-w-[25rem]  mx-auto text-center font-[600]"
            >
              {onBoardingScreens[currentViewIndex].desc ?? ""}
            </Text>

            <TouchableOpacity onPress={() => handleContinue()}>
              <View className="w-[70px] h-[70px]  items-center justify-center self-center">
                <View className="w-[60px] h-[60px]  items-center justify-center self-center bg-[#DFE0E0] rounded-full">
                  <Ionicons
                    name="arrow-forward-circle"
                    size={40}
                    color={"#3841A3"}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </CustomSafeAreaView>
  );
}
