import { ReactNode } from "react";
import { ImageSourcePropType } from "react-native";

export type font = { type: string; font: string };

export const fontType = [];

export type tripType = { type: string; image: ImageSourcePropType };

export type airport = {
  callSign: string;
  name: string;
  distanceFromCity: string;
};

export type location = {
  landmark?: string;
  name: string;
  desc?: string;
  stars: number;
  cost: number;
  overview: string;
  airport: airport;
  currentWhether: number;
  distance: number;
  image: string;
  statusBarAccent?: "dark-content" | "light-content";
  largeImage?: string;
};

export type faq = {
  question: string;
  answer: string;
};

export type flightTicket = {
  from: location;
  to: location;
  departure: Date;
  arrival?: Date;
  seats: number;
  seat: string;
  startpoint?: location;
  destinaton?: location;
  isBooked: boolean;
};
export type flightClasses = "Economy" | "Business" | "First Class";

export type flight = {
  airline: airline;
  time: durations;
  classesAvailable: flightClasses;
};

export type airline = {
  name: string;
  logo: string;
  planes: string[];
};

export type durations = {
  duration: number;
  fromTime: number;
  toTime: number;
};

export type seatOptions = {
  icon: ReactNode;
  desc: string;
};

export interface SeatTypes {
  economy: seatOptions[];
  "first class": seatOptions[];
  business: seatOptions[];
}

export interface bookingDetails extends flight {
  airlineDetails: flight;
  departureTime: string;
  arrivalTime: string;
  cost: any;
  class?: flightClasses;
}

export type PaymentSteps = "Make Payment" | "Payment Successful" | "Ticket";
