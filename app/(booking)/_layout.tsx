import { Stack } from "expo-router";
import React from "react";

const BookingLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="options" />
      <Stack.Screen name="review" />
      <Stack.Screen name="seats" />
    </Stack>
  );
};

export default BookingLayout;
