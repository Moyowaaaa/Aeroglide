export type font = { type: string; font: string };

export const fontType = [];

export type airport = {
  callSign: string;
  name: string;
  distanceFromCity: string;
};

export type location = {
  name: string;
  desc?: string;
  stars: number;
  cost: string;
  overview: string;
  airport: airport;
  currentWhether: number;
  distance: number;
  images: string;
};
