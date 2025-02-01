import React, { useState } from "react";
import {
  InputModeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { colors, textType } from "@/constants";
import { Ionicons } from "@expo/vector-icons";

type inputProps = {
  label: string;
  type?: "text" | "password";
  placeholder?: string;
  onTextChange?: (val: string) => void;
  mode?: InputModeOptions;
};

const FormInput = ({
  label,
  type,
  placeholder,
  onTextChange,
  mode,
}: inputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text style={[textType.paragraph, styles.label]}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.textInput, textType.paragraph]}
          placeholder={placeholder}
          placeholderTextColor={colors.darkGrey}
          inputMode={mode || ("text" as InputModeOptions)}
          secureTextEntry={type === "password" && !showPassword}
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
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d6d6d6",
    borderRadius: 15,
    overflow: "hidden",
  },
  textInput: {
    flex: 1,
    paddingVertical: 12,
    paddingLeft: 10,
    fontSize: 23,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderLeftWidth: 1,
    borderLeftColor: "#d6d6d6",
  },
});
