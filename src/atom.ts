import { atom, selector } from "recoil";

export interface ICountry {
  id: number;
  text: string;
  category: "stay" | "Go" | "Like";
}

export const countryState = atom<ICountry[]>({
  key: "CountryList",
  default: [],
});

export const countrySelectro = selector({
  key: "CountrySelector",
  get: ({ get }) => {
    const countryList = get(countryState);
    // stay, go, like
    return [countryList.filter((country) => country.category === "stay"), countryList.filter((country) => country.category === "Go"), countryList.filter((country) => country.category === "Like")];
  },
});
