import Header from "@/components/auth/Header";
import { CustomButton } from "@/components/general/CustomButton";
import CustomSafeAreaView from "@/components/general/CustomSafeAreaView";
import FormInput from "@/components/general/TextInput";
import { colors, textType } from "@/constants";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, View } from "react-native";

const ForgotPasswordScreen = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState<number | null>(null);
  return (
    <CustomSafeAreaView>
      <View className="w-full  flex-1 px-6 py-6">
        <Header
          title="Forgot Password?"
          desc="No worries, we’ll send you reset instructions"
        />

        <View style={{ marginTop: 64, gap: 24 }}>
          <FormInput
            label="Enter your phone number"
            placeholder="Phone Number"
            type="text"
            onTextChange={(val) => setPhoneNumber(parseInt(val))}
            mode="numeric"
          />

          <View style={{ gap: 20 }}>
            <Text
              style={[
                {
                  ...textType.paragraph,
                  color: colors.darkGrey,
                  alignSelf: "center",
                  textAlign: "center",
                  maxWidth: 300,
                },
              ]}
            >
              We’ll send you a (5) pin code to verify your information
            </Text>

            <CustomButton
              type="primary"
              width="100%"
              disabled={!phoneNumber}
              onPress={() =>
                router.push({
                  pathname: "/(auth)/verification",
                  params: { phone: phoneNumber },
                })
              }
            >
              <Text style={{ fontSize: 16, color: "white" }}>Send Code</Text>
            </CustomButton>
          </View>
        </View>
      </View>
    </CustomSafeAreaView>
  );
};

export default ForgotPasswordScreen;
