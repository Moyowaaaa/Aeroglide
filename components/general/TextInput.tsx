import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { PasswordCheck } from "iconsax-react-native";
import { TextType } from "@/constants";
import { Ionicons } from "@expo/vector-icons";

type inputProps = {
  label: string;
  type?: "text" | "password";
  placeholder?: string;
  onTextChange?: (val: any) => void;
  mode?: string;
};

const FormInput = ({
  label,
  type,
  placeholder,
  onTextChange,
  mode,
}: inputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <Text style={[TextType.paragraph, styles.label]}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.textInput, TextType.paragraph]}
          placeholder={placeholder}
          inputMode={mode ? mode : ("text" as any)}
          secureTextEntry={type === "password"}
          onChangeText={(val) => {
            if (onTextChange) {
              onTextChange(val);
            }
          }}
        />
        <View style={styles.iconContainer}>
          <Ionicons
            size={20}
            color={"black"}
            name={
              type === "text"
                ? "checkmark-circle-outline"
                : showPassword
                ? "eye-off"
                : "eye"
            }
            onPress={() => {
              if (type === "password") {
                setShowPassword(!showPassword);
              }
            }}
          />
          {/* <Ionicons size={20} color={"black"} name="eye" />
          <Ionicons size={20} color={"black"} name="eye-off" /> */}
        </View>
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    gap: 8,
    height: 100,
  },
  label: {
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: "row", // Arrange items in a row
    alignItems: "center", // Align items vertically in the center
    borderWidth: 1,
    borderColor: "#d6d6d6",
    borderRadius: 15,
    overflow: "hidden",
  },
  textInput: {
    flex: 1, // Take up available space
    paddingVertical: 12,
    paddingLeft: 10,
    fontSize: 23,
  },
  iconContainer: {
    justifyContent: "center", // Center the icon
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderLeftWidth: 1,
    borderLeftColor: "#d6d6d6", // Optional: separator between input and icon
  },
});
