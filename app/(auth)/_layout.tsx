import { usePreventBackNavigation } from "@/hooks/usePreventBackNavigation";
import { Stack } from "expo-router";
import React from "react";

const AuthLayout = () => {
  usePreventBackNavigation("(auth)");

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="create" />
      <Stack.Screen name="forgot" />
      <Stack.Screen name="verification" />
    </Stack>
  );
};

export default AuthLayout;
