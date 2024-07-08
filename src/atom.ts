import { atom } from "recoil";

interface ICountry {
  id: number;
  text: string;
  category: "stay" | "Go" | "Like";
}

export const countryState = atom<ICountry[]>({
  key: "CountryList",
  default: [],
});
