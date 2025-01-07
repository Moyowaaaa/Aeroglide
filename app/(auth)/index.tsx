import Header from "@/components/auth/Header";
import { CustomButton } from "@/components/general/CustomButton";
import CustomSafeAreaView from "@/components/general/CustomSafeAreaView";
import FormInput from "@/components/general/TextInput";
import { colors, TextType } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

const AuthScreen = () => {
  const router = useRouter();

  return (
    <CustomSafeAreaView>
      <View className="w-full gap-16 flex-1 px-6 pb-6">
        <Header
          title="Welcome Back 👋🏽"
          desc="Hello, welcome back to Aeroglide"
        />
        <View className="w-full " style={{ gap: 16 }}>
          <View style={{ gap: 1 }}>
            <FormInput label="Email" placeholder="Enter Email" type="text" />

            <FormInput
              label="Password"
              placeholder="Enter password"
              type="password"
            />

            <Link href={"/(auth)/forgot"} style={{ alignSelf: "flex-end" }}>
              <Text
                style={[
                  {
                    ...TextType.paragraph,
                    color: colors.grey,
                    alignSelf: "flex-end",
                  },
                ]}
              >
                Forgot password?
              </Text>
            </Link>
          </View>

          <View style={{ marginTop: 20 }}>
            <CustomButton
              type="primary"
              width="100%"
              disabled={false}
              onPress={() => router.push("/(home)" as any)}
            >
              <Text style={{ fontSize: 16, color: "white" }}>Login</Text>
            </CustomButton>
          </View>

          <View className="w-full  mt-10 flex-row justify-between items-center gap-4">
            <View className="w-20 border-[1px] border-[#E9E9E9]"></View>
            <Text
              style={[
                {
                  ...TextType.paragraph,
                  color: colors.grey,
                },
              ]}
            >
              Sign In with Apple or Google
            </Text>

            <View className="w-20 border-[1px] border-[#E9E9E9]"></View>
          </View>

          <View style={{ gap: 20, flexDirection: "row" }}>
            <CustomButton type="secondary" buttonSize="md">
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
              >
                <Ionicons name="logo-apple" size={30} />
                <Text>Apple</Text>
              </View>
            </CustomButton>

            <CustomButton type="secondary" buttonSize="md">
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
              >
                <Image
                  source={require("../../assets/images/google.png")}
                  width={30}
                  height={30}
                  className="max-h-[30px] max-w-[30px]"
                  resizeMode="contain"
                />
                <Text>Google</Text>
              </View>
            </CustomButton>
          </View>

          <Link href={"/(auth)/create"}>
            <Text
              style={{
                ...TextType.paragraph,
                color: colors.grey,
                textAlign: "center",
              }}
            >
              Don’t have and account?{" "}
              <Text style={{ color: colors.black }}>Sign Up</Text>
            </Text>
          </Link>
        </View>
      </View>
    </CustomSafeAreaView>
  );
};

export default AuthScreen;
