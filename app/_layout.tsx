import { Stack } from "expo-router";
import {
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_500Medium,
  Poppins_600SemiBold,
  useFonts,
} from "@expo-google-fonts/poppins";
import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import "../global.css";
import { StatusBar } from "react-native";
import { FlightSearchProvider } from "@/context/FlightContext";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,

    Poppins_600SemiBold,
  });

  useEffect(() => {
    (async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    })();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <FlightSearchProvider>
      <React.Fragment>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(auth)" />
        </Stack>
        <StatusBar barStyle={"dark-content"} />
      </React.Fragment>
    </FlightSearchProvider>
  );
}
