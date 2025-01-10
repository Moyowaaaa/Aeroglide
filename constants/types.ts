export type font = { type: string; font: string };

export const fontType = [];

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
  images: string;
  statusBarAccent?: "dark-content" | "light-content";
};

export type faq = {
  question: string;
  answer: string;
};

export type flightTicket = {
  from: location;
  to: location;
  departure: Date;
  arrival: Date;
  // price: number;
  seats: number;
  seat: string;
  startpoint?: location;
  destinaton?: location;
};

export type flight = {
  airline: airline;
  time: durations;
};

// export const flight={

// }

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
