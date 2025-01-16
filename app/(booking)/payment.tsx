import React, { useState } from "react";
import { Text, View } from "react-native";
import CustomSafeAreaView from "@/components/general/CustomSafeAreaView";
import MakePayment from "@/components/payment/MakePayment";
import { PaymentSteps } from "@/constants/types";
import PaymentSuccessful from "@/components/payment/PaymentSuccessful";
import Ticket from "@/components/payment/Ticket";

const PaymentScreen = () => {
  const [paymentStep, setPaymentStep] = useState<PaymentSteps>("Make Payment");

  const stepComponents: Record<PaymentSteps, JSX.Element> = {
    "Make Payment": <MakePayment setPaymentStep={setPaymentStep} />,
    "Payment Successful": <PaymentSuccessful setPaymentStep={setPaymentStep} />,
    Ticket: <Ticket />,
  };

  return (
    <CustomSafeAreaView>
      <View
        style={{
          flex: 1,
          position: "relative",
        }}
      >
        {stepComponents[paymentStep]}
      </View>
    </CustomSafeAreaView>
  );
};

export default PaymentScreen;
