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
  cost: string;
  overview: string;
  airport: airport;
  currentWhether: number;
  distance: number;
  images: string;
  statusBarAccent?: "dark-content" | "light-content";
};
