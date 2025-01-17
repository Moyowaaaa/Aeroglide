import { SafeAreaView } from "react-native-safe-area-context";
import { PropsWithChildren } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { isAndroid } from "@/constants";

const CustomSafeAreaView = ({ children, ...rest }: PropsWithChildren) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: isAndroid ? 25 : 10,
      }}
      {...rest}
    >
      <KeyboardAvoidingView
        behavior={!isAndroid ? "padding" : "height"}
        contentContainerStyle={{ flexGrow: 1 }}
        className="flex-1"
        keyboardVerticalOffset={10}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;
