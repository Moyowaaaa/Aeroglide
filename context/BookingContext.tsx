import { bookingDetails } from "@/constants/types";
import React, { createContext, useState } from "react";

export const bookingContext = createContext<any>(null);

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
    <bookingContext.Provider value={{ bookingDetails, setBookingDetails }}>
      {children}
    </bookingContext.Provider>
  );
};
