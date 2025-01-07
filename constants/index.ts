import { Platform } from "react-native";

export const fontTypes = {
  regular: "Poppins_400Regular",
  bold: "Poppins_700Bold",
  medium: "Poppins_500Medium",
  semiBold: "Poppins_600SemiBold,",
};

export const isAndroid = Platform.OS === "android";

export const colors = {
  black: "#000",
  grey: "#A8A8A8",
  blue: "#454DA9",
  darkGrey: "#777",
  otpGrey: "#CACACA",
  teal: "#00A596",
  white: "white",
};

export const TextType = {
  header: {
    fontFamily: fontTypes.bold,
    fontSize: 28,
    lineHeight: 40,
  },

  subHeader: {
    fontFamily: fontTypes.bold,
    fontSize: 26,
    lineHeight: 30,
  },

  paragraph: {
    fontFamily: fontTypes.medium,
    fontSize: 14,
  },
};

export const buttonVariants = {
  primary: { backgroundColor: "#454DA9", color: "#ffff" },
  secondary: { backgroundColor: "#ffffff", color: "#000" },
};
