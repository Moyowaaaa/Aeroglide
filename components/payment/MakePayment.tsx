import React, { SetStateAction } from "react";
import { Text, View } from "react-native";
import TopBar from "../booking/TopBar";
import DebitCard from "./components/DebitCard";
import PaymentInfo from "./components/PaymentInfo";
import { CustomButton } from "../general/CustomButton";
import { colors, textType } from "@/constants";
import { PaymentSteps } from "@/constants/types";

const MakePayment = ({
  setPaymentStep,
}: {
  setPaymentStep: React.Dispatch<SetStateAction<PaymentSteps>>;
}) => {
  return (
    <View
      style={{
        flex: 1,
        position: "relative",
        paddingHorizontal: 20,
      }}
    >
      <View style={{ flex: 0.92, gap: 16 }}>
        <TopBar title={`${`Payment`}`} canGoBack={true} />
        <DebitCard />
        <PaymentInfo />
      </View>

      <CustomButton
        type="primary"
        width={"100%"}
        style={{
          alignSelf: "center",
          width: "100%",
        }}
        onPress={() => setPaymentStep("Payment Successful")}
      >
        <Text
          style={{
            ...textType.paragraph,
            color: colors.white,
          }}
        >
          Pay Now
        </Text>
      </CustomButton>
    </View>
  );
};

export default MakePayment;
