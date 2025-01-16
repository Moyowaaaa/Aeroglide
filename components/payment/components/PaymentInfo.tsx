import { colors, textType } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

const PaymentInfo = () => {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  return (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 6 }}>
        <Text style={[textType.paragraph, styles.label]}>Card</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.textInput, textType.paragraph]}
            placeholderTextColor={colors.darkGrey}
            inputMode={"numeric"}
            value="4672  4829  8573  7729"
          />

          <View style={styles.iconContainer}>
            <Image
              source={require("@/assets/images/visaIcon.png")}
              resizeMode="contain"
              style={{ width: 40, height: 24 }}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ gap: 6, width: "45%" }}>
          <Text style={[textType.paragraph, styles.label]}>CVV</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.textInput, textType.paragraph]}
              placeholderTextColor={colors.darkGrey}
              inputMode={"numeric"}
              secureTextEntry={true}
              maxLength={3}
              value="999"
            />
          </View>
        </View>

        <View style={{ gap: 6, width: "45%" }}>
          <Text style={[textType.paragraph, styles.label]}>Expiry date</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.textInput, textType.paragraph]}
              placeholderTextColor={colors.darkGrey}
              inputMode={"numeric"}
              value="09/25"
            />
          </View>
        </View>
      </View>

      <View style={{ gap: 6 }}>
        <Text style={[textType.paragraph, styles.label]}>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.textInput, textType.paragraph]}
            placeholderTextColor={colors.darkGrey}
            inputMode={"numeric"}
            secureTextEntry={true}
            value="dfdfdfdfd"
          />

          <View style={styles.iconContainer}>
            <Ionicons
              size={20}
              color={"black"}
              name={showPassword ? "eye-off" : "eye"}
              onPress={() => {
                setShowPassword(!showPassword);
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PaymentInfo;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",

    overflow: "hidden",
    backgroundColor: "#F9F9F9",
  },
  textInput: {
    flex: 1,
    paddingVertical: 15,
    paddingLeft: 10,
    fontSize: 23,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
});
