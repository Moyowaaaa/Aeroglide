import { CustomButton } from "@/components/general/CustomButton";
import CustomSafeAreaView from "@/components/general/CustomSafeAreaView";
import NavigationBar from "@/components/general/NavigationBar";
import { colors, TextType } from "@/constants";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import OTPTextInput from "react-native-otp-textinput";
import { Edit2 } from "iconsax-react-native";

const VerificationScreen = () => {
  const { phone } = useLocalSearchParams();

  return (
    <CustomSafeAreaView>
      <View className="w-full  flex-1 px-6 ">
        <NavigationBar title="Verification" canGoBack={true} />

        <View style={{ gap: 20, height: "100%", paddingTop: 20 }}>
          <Image
            source={require("../../assets/images/shield.png")}
            alt=""
            resizeMode="contain"
            style={{ alignSelf: "center" }}
          />

          <Text
            style={{
              ...TextType.header,
              fontSize: 20,
              textAlign: "center",
              color: colors.blue,
            }}
          >
            Verification Code
          </Text>

          <Text
            style={{
              ...TextType.paragraph,
              color: colors.grey,
              fontSize: 16,
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            We’ll send you a (5) pin code to verify your information
          </Text>

          <OTPTextInput
            autoFocus
            offTintColor={colors.black}
            tintColor={colors.blue}
            containerStyle={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            inputCellLength={1}
            textInputStyle={{
              // borderRadius: 100,
              height: 60,
              width: 55,
              borderColor: colors.otpGrey,
              borderStyle: "solid",
              borderWidth: 1,
              borderBottomWidth: 1,
              shadowColor: "none",
              backgroundColor: "white",
              borderRadius: 10,
            }}
            inputCount={5}
          />

          <View className="flex-row gap-4 items-center self-center">
            <Text
              style={{
                ...TextType.paragraph,
                fontSize: 16,
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              {phone}
            </Text>

            <TouchableOpacity onPress={() => router.push("/(auth)/forgot")}>
              <View
                style={style.iconContainer}
                className="self-left border h-auto w-auto p-2 rounded-full"
              >
                <Edit2 variant="Outline" color={colors.black} size={16} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ gap: 10, marginTop: 20 }}>
            <CustomButton type="secondary" width="100%" disabled={false}>
              <Text style={{ fontSize: 16, color: colors.black }}>
                Send Again
              </Text>
            </CustomButton>

            <CustomButton type="primary" width="100%" disabled={false}>
              <Text style={{ fontSize: 16, color: "white" }}>Submit</Text>
            </CustomButton>
          </View>
        </View>
      </View>
    </CustomSafeAreaView>
  );
};

export default VerificationScreen;

const style = StyleSheet.create({
  iconContainer: {
    borderRadius: "50%",
    borderColor: "#CDCDCD",
  },
});
