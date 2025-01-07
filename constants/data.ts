import { location } from "./types";

export const locations: location[] = [
  {
    name: "Lagos Nigeria",
    stars: 3,
    airport: {
      name: "Murtala Muhammed International Airport",
      callSign: "LOS",
      distanceFromCity: "0.8KM",
    },
    desc: "Lagos is the largest city in Nigeria and the African continent. Lagos is one of the fastest growing cities in the world, and also one of the most populous urban areas. Lagos is a major financial centre in Africa; the megacity has the highest GDP, and also houses one of the largest and busiest seaports on the continent.",
    cost: "1050",
    currentWhether: 29,
    distance: 122,
    overview: "Explore the city of Lagos and it’s culture",
    images: require("@/assets/images/lagos.png"),
  },
  {
    name: "France Paris",
    stars: 4,
    airport: {
      name: "Paris Charles de Gaulle Airport",
      callSign: "CDG",
      distanceFromCity: "32KM",
    },
    cost: "2000",
    currentWhether: 21,
    distance: 125,
    overview: "Iconic Eiffel Tower in  Paris",
    images: require("@/assets/images/paris.png"),
  },
  {
    name: "Italy Milan",
    stars: 4,
    airport: {
      name: "Milano Malpensa Airport",
      callSign: "MXP",
      distanceFromCity: "7.8KM",
    },
    desc: "Milan possess a rich and attractive cultural scene with shows, activities and festival. Explore Milan like you’ve never seen today.",
    cost: "1830",
    currentWhether: 25,
    distance: 739,
    overview: "Iconic ancient Italian gladiatorial area",
    images: require("@/assets/images/milan.png"),
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
    cost: "1830",
    currentWhether: 25,
    distance: 739,
    overview: "Explore the city of London and it’s culture",
    images: require("@/assets/images/london.png"),
  },
];
