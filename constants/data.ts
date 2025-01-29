import { randomizeStuff } from "@/utils";
import {
  airline,
  durations,
  faq,
  flight,
  flightClasses,
  location,
  onBoardingScreenText,
  tripType,
} from "./types";
import { ImageSourcePropType } from "react-native";

export const onBoardingScreens: Record<number, onBoardingScreenText> = {
  0: {
    text: "Let's Fly Somewhere, Everywhere.",
    desc: "Make it easy for travelers to find and purchase the best deal on flights.",
  },
  1: {
    text: "Discover flights to your dream destination",
    desc: "Planning a quick getaway or long haul adventure? Find, compare and book flight with ease",
  },
  2: {
    text: "Book your flight with ease",
    desc: "Find the best deals on flights. Save time and money with our easy-to-use booking engine.",
  },
};

export const onboardingImages: ImageSourcePropType[] = [
  require("@/assets/images/plane.png"),
  require("@/assets/images/discoverImage.png"),
  require("@/assets/images/everywhereImage.png"),
];

export const locations: location[] = [
  {
    name: "Lagos Nigeria",
    stars: 3,
    landmark: "Marina, Lagos",
    airport: {
      name: "Murtala Muhammed International Airport",
      callSign: "LOS",
      distanceFromCity: "0.8KM",
    },
    desc: "Lagos is the largest city in Nigeria and the African continent. Lagos is one of the fastest growing cities in the world, and also one of the most populous urban areas. Lagos is a major financial centre in Africa; the megacity has the highest GDP, and also houses one of the largest and busiest seaports on the continent.",
    cost: 800,
    currentWhether: 29,
    distance: 122,
    overview: "Explore the city of Lagos and it’s culture",
    image: require("@/assets/images/lagos.png"),
    statusBarAccent: "dark-content",
  },
  {
    name: "France Paris",
    stars: 4,
    landmark: "Eiffel Tower, Paris",
    airport: {
      name: "Paris Charles de Gaulle Airport",
      callSign: "CDG",
      distanceFromCity: "32KM",
    },
    desc: "Paris is the capital and most populous city of France, with an estimated population of 2,148,271 residents as of 2020, in an area of more than 105 square kilometres. Since the 17th century, Paris has been one of Europe's major centres of finance, diplomacy, commerce, fashion, science and arts.",
    cost: 2000,
    currentWhether: 21,
    distance: 125,
    overview: "Iconic Eiffel Tower in  Paris",
    image: require("@/assets/images/paris.png"),
    largeImage: require("@/assets/images/france2.png"),
  },
  {
    name: "Italy Milan",
    stars: 4,
    landmark: "Italiano Riviera, Italy",
    airport: {
      name: "Milano Malpensa Airport",
      callSign: "MXP",
      distanceFromCity: "7.8KM",
    },
    desc: "Milan possess a rich and attractive cultural scene with shows, activities and festival. Explore Milan like you’ve never seen today.",
    cost: 1910,
    currentWhether: 25,
    distance: 739,
    overview: "Iconic ancient Italian gladiatorial area",
    image: require("@/assets/images/italy.png"),
    statusBarAccent: "dark-content",
  },
  {
    name: "London United Kingdom",
    stars: 5,
    airport: {
      name: "Heathrow Airport",
      callSign: "LHR",
      distanceFromCity: "2.8KM",
    },
    desc: "London is the capital of England and the United Kingdom, the largest metropolitan area in the United Kingdom and the largest urban zone in the European Union by most measures. London has been a major settlement for two millennia. Londinium was founded by the Romans.",
    cost: 1780,
    currentWhether: 25,
    distance: 739,
    overview: "Explore the city of London and it’s culture",
    image: require("@/assets/images/london.png"),
    landmark: "Big Ben, London",
    statusBarAccent: "dark-content",
  },
  {
    name: "Dubai United Arab Emirates",
    stars: 5,
    landmark: "Burj Khalifa",
    airport: {
      name: "Dubai International Airport",
      callSign: "DXB",
      distanceFromCity: "2.8KM",
    },
    desc: "Dubai is the largest and most populous city in the United Arab Emirates (UAE). It is located on the southeast coast of the Persian Gulf and is the capital of the Emirate of Dubai, one of the seven emirates that make up the country.",
    cost: 3010,
    currentWhether: 35,
    distance: 1239,
    overview: "Iconic Burj Khalifa in Dubai",
    image: require("@/assets/images/dubai.png"),
  },
  {
    name: "Amsterdam Holland",
    stars: 4,
    landmark: "Von Gough, Amsterdam",
    airport: {
      name: "Amsterdam Airport Schiphol",
      callSign: "AMS",
      distanceFromCity: "2.8KM",
    },
    desc: "Amsterdam is the capital and most populous city of the Netherlands with a population of 872,680 within the city proper, 1,558,755 in the urban area and 2,480,394 in the metropolitan area. Found within the province of North Holland, Amsterdam is colloquially referred to as the 'Venice of the North', due to the large number of canals which form a UNESCO World Heritage Site.",
    cost: 1830,
    currentWhether: 25,
    distance: 840,
    overview: "Iconic Von Gough in Amsterdam",
    image: require("@/assets/images/netherlands.png"),
  },
  {
    name: "Athens Greece",
    stars: 4,
    landmark: "Acropolis of Athens",
    airport: {
      name: "Athens International Airport",
      callSign: "ATH",
      distanceFromCity: "2.8KM",
    },
    desc: "Greece is a country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas. Influential in ancient times, it's often called the cradle of Western civilization. Athens, its capital, retains landmarks including the 5th-century B.C. Acropolis citadel with the Parthenon temple. Greece is also known for its beaches, from the black sands of Santorini to the party resorts of Mykonos.",
    cost: 1270,
    currentWhether: 22,
    distance: 940,
    overview: "Iconic Acropolis of Athens in Greece",
    image: require("@/assets/images/greece.png"),
  },
  {
    name: "Denmark Copenhagen",
    stars: 4,
    airport: {
      name: "Copenhagen Airport",
      callSign: "CPH",
      distanceFromCity: "2.8KM",
    },
    desc: "Copenhagen is the capital and most populous city of Denmark. As of 1 January 2020, the city had a population of 794,128 with 632,340 in Copenhagen Municipality, 104,305 in Frederiksberg Municipality, 42,989 in Tårnby Municipality, and 14,494 in Dragør Municipality. It forms the core of the wider urban area of Copenhagen and the Copenhagen metropolitan area.",
    cost: 1430,
    currentWhether: 21,
    distance: 1304,
    overview: "Explore the city of Copenhagen and it’s culture",
    image: require("@/assets/images/denmark.png"),
    landmark: "Frederik's Church",
  },
];

export const faqs: faq[] = [
  {
    question: "How do I get to the airport?",
    answer:
      "You can get to the airport by taking a cab or using the airport shuttle service.",
  },
  {
    question: "What is the best time to visit?",
    answer:
      "The best time to visit is during the summer months when the weather is warm and sunny.",
  },
  {
    question: "What is the currency used in this country?",
    answer: "The currency used in this country is the local currency.",
  },
  {
    question: "What are the best places to visit?",
    answer:
      "The best places to visit are the local markets, museums, and historical sites.",
  },
];

export const airlines: airline[] = [
  {
    name: "Fly Emirates",
    logo: require("@/assets/images/emirates.png"),
    planes: ["Boeing 777", "Airbus A380", "Airbus A350"],
  },
  {
    name: "Qatar Airways",
    logo: require("@/assets/images/qatar.png"),
    planes: [
      "Airbus A350-900",
      "Airbus A330-900",
      "Boeing 777-200LR",
      "Airbus A380",
    ],
  },
  {
    name: "Delta Airlines",
    logo: require("@/assets/images/delta.png"),
    planes: ["Boeing 777", "Airbus A380", "Airbus A330-900"],
  },
  {
    name: "lufthansa",
    logo: require("@/assets/images/lufthansa.png"),
    planes: [
      "Boeing 747-8",
      "Airbus A340-300",
      "Boeing 747-400",
      "Airbus A380-800",
    ],
  },
  {
    name: "Spirit Airlines",
    logo: require("@/assets/images/spirit.png"),
    planes: ["Boeing 747", "Airbus A321", "Airbus A320"],
  },
];

export const ticketClasses: flightClasses[] = [
  "Economy",
  "Business",
  "First Class",
];

export const timeSuffixes: number[] = [30, 10, 45, 0];

export const ticketCounts: number[] = [15, 123, 30, 20, 10, 5, 3, 1];

export const timings: durations[] = [
  { duration: 4, fromTime: 10, toTime: 10 + 4 },
  { duration: 4, fromTime: 14, toTime: 14 + 4 },
  { duration: 3, fromTime: 7, toTime: 7 + 3 },
  { duration: 3, fromTime: 9, toTime: 9 + 3 },
  { duration: 5, fromTime: 12, toTime: 12 + 5 },
];

export const flights: flight[] = [
  {
    airline: randomizeStuff(airlines)[0],
    time: randomizeStuff(timings)[0],
    classesAvailable:
      randomizeStuff(ticketClasses)[Math.floor(Math.random() * 2)],
  },
  {
    airline: randomizeStuff(airlines)[0],
    time: randomizeStuff(timings)[0],
    classesAvailable:
      randomizeStuff(ticketClasses)[Math.floor(Math.random() * 2)],
  },
  {
    airline: randomizeStuff(airlines)[2],
    time: randomizeStuff(timings)[0],
    classesAvailable:
      randomizeStuff(ticketClasses)[Math.floor(Math.random() * 2)],
  },
  {
    airline: randomizeStuff(airlines)[0],
    time: randomizeStuff(timings)[0],
    classesAvailable:
      randomizeStuff(ticketClasses)[Math.floor(Math.random() * 2)],
  },

  {
    airline: airlines[4],
    time: randomizeStuff(timings)[0],
    classesAvailable:
      randomizeStuff(ticketClasses)[Math.floor(Math.random() * 2)],
  },
];

export const tripTypes: tripType[] = [
  { type: "Round Trip", image: require("@/assets/images/roundtrip.png") },
  { type: "One Way", image: require("@/assets/images/oneWay.png") },
];

export const availableSeatLetters: string[] = ["A", "B", "C", "D", "E", "F"];
