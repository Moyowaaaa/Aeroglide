import React from "react";
import {
  TouchableOpacity,
  ViewStyle,
  StyleSheet,
  TextStyle,
  View,
} from "react-native";

type ButtonType = "primary" | "secondary" | "base";

interface ButtonProps {
  type?: ButtonType;
  children: React.ReactNode;
  buttonSize?: "long" | "md" | "small";
  width?: string | number;
  disabled?: boolean;
  style?: ViewStyle | ViewStyle[];
}

export const CustomButton = ({
  type = "base",
  children,
  buttonSize,
  width,
  disabled = false,
  style,
}: ButtonProps) => {
  const buttonStyles = [
    styles.button,
    styles[type],
    disabled && styles.disabled,
    {
      width:
        (width as number | undefined) ||
        (buttonSizes[buttonSize || "long"] as number | undefined),
    },
    style,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      disabled={disabled}
      activeOpacity={disabled ? 1 : 0.8}
    >
      {children}
    </TouchableOpacity>
  );
};

const buttonSizes: Record<string, number | string> = {
  long: "100%",
  md: "48%",
  small: "auto",
};

const styles = StyleSheet.create({
  button: {
    minHeight: 52,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
  },
  primary: {
    backgroundColor: "#454DA9",
    borderColor: "#0000001a",
  },
  secondary: {
    backgroundColor: "white",
    borderColor: "#0000001a",
  },
  base: {
    backgroundColor: "white",
    borderColor: "#0000001a",
  },
  disabled: {
    backgroundColor: "#e0e0e0",
    borderColor: "#c0c0c0",
  },
});
