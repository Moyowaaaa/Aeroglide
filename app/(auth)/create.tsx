import Header from "@/components/auth/Header";
import { CustomButton } from "@/components/general/CustomButton";
import CustomSafeAreaView from "@/components/general/CustomSafeAreaView";
import FormInput from "@/components/general/TextInput";
import { colors, TextType } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Checkbox from "expo-checkbox";

const CreateAccountScreen = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <CustomSafeAreaView>
      <ScrollView className="w-full flex-1 px-6 pb-32 ">
        <Header
          title="Create New Account 🔥"
          desc="Hello, create an account to get started"
        />

        <View className="w-full " style={{ gap: 16, marginTop: 32 }}>
          <View style={{ gap: 4 }}>
            <FormInput
              label="First Name"
              placeholder="Input first name (as per passport)"
              type="text"
            />

            <FormInput
              label="Last Name"
              placeholder="Input last name (as per passport)"
              type="text"
            />

            <FormInput label="Email" placeholder="Enter Email" type="text" />

            <FormInput
              label="Password"
              placeholder="Enter password"
              type="password"
            />

            <TouchableOpacity
              style={{ gap: 8 }}
              className="flex-row items-center"
              activeOpacity={0.7}
              onPress={() => setIsChecked(!isChecked)}
            >
              <Checkbox
                value={isChecked}
                onValueChange={() => setIsChecked(!isChecked)}
                color={isChecked ? colors.blue : undefined}
              />
              <Text
                style={[
                  {
                    ...TextType.paragraph,
                    color: colors.grey,
                    alignSelf: "flex-end",
                    fontSize: 12,
                  },
                ]}
                className="  leading-[18px] text-[#00000099] flex-row flex-wrap"
              >
                I have read and agreed to the terms and conditions
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 20 }}>
            <CustomButton type="primary" width="100%" disabled={!isChecked}>
              <Text style={{ fontSize: 16, color: "white" }}>
                Create Account
              </Text>
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
              Sign up with Apple or Google
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
                <Ionicons name="logo-google" size={30} />
                <Text>Google</Text>
              </View>
            </CustomButton>
          </View>

          <Link href={"/(auth)"}>
            <Text
              style={{
                ...TextType.paragraph,
                color: colors.grey,
                textAlign: "center",
              }}
            >
              Have an account already?{" "}
              <Text style={{ color: colors.black }}> Sign In</Text>
            </Text>
          </Link>
        </View>
      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default CreateAccountScreen;
