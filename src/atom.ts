import { atom, selector } from "recoil";

export interface ICountry {
  id: number;
  text: string;
  category: "stay" | "Go" | "Like";
}

export const countryState = atom<ICountry[]>({
  key: "CountryList",
  default: [],
  effects: [
    ({ setSelf, onSet }) => {
      const savedData = localStorage.getItem("countryInfo");
      if (savedData) setSelf(JSON.parse(savedData));
      onSet((newValue, _, isReset) => {
        isReset ? localStorage.removeItem("countryInfo") : localStorage.setItem("countryInfo", JSON.stringify(newValue));
      });
    },
  ],
});

export const countrySelector = selector({
  key: "CountrySelectorList",
  get: ({ get }) => {
    const countryList = get(countryState);
    // stay, go, like
    return [countryList.filter((country) => country.category === "stay"), countryList.filter((country) => country.category === "Go"), countryList.filter((country) => country.category === "Like")];
  },
});
