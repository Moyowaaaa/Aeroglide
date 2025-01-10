import { locations } from "@/constants/data";
import { flightTicket } from "@/constants/types";
import React, { createContext, useState } from "react";

export const flightSearchContext = createContext<any>(null);

export const FlightSearchProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [flightDetails, setFlightDetails] = useState<flightTicket | null>({
    from: locations[0],
    to: locations[1],
    startpoint: locations[0],
    destinaton: locations[1],
    departure: new Date(),
    arrival: new Date(),
    seat: "All Class",
    seats: 1,
  });

  return (
    <flightSearchContext.Provider value={{ flightDetails, setFlightDetails }}>
      {children}
    </flightSearchContext.Provider>
  );
};
