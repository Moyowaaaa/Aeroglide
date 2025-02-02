import React, { useEffect } from "react";
import { BackHandler, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const usePreventBackNavigation = (preventedRoutes: string) => {
  const navigation: any = useNavigation();

  useEffect(() => {
    const handleBackPress = () => {
      const currentRoute =
        navigation.getState().routes[navigation.getState().index]?.name;

      if (preventedRoutes.includes(currentRoute)) {
        return true;
      }
      return false;
    };

    BackHandler.addEventListener("hardwareBackPress", handleBackPress);

    if (
      preventedRoutes.includes(
        navigation.getState().routes[navigation.getState().index]?.name
      )
    ) {
      navigation.setOptions({
        gestureEnabled: false,
        animation: Platform.select({ android: "none" }),
      });
    }

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, [navigation, preventedRoutes]);
};
