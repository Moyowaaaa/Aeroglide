import { bookingDetails } from "@/constants/types";
import React, { createContext, useState } from "react";

export const BookingContext = createContext<any>(null);

export const BookingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [details] = useState<boolean>(false);
  const [bookingDetails, setBookingDetails] = useState<bookingDetails | null>(
    null
  );

  return (
    <BookingContext.Provider value={{ bookingDetails, setBookingDetails }}>
      {children}
    </BookingContext.Provider>
  );
};
