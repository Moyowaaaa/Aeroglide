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
import { BookingContextProvider } from "@/context/BookingContext";
import { SheetProvider } from "react-native-actions-sheet";
import "@/components/sheets";

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
      <BookingContextProvider>
        <SheetProvider>
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
        </SheetProvider>
      </BookingContextProvider>
    </FlightSearchProvider>
  );
}
