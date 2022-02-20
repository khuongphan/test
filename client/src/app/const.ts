import { Country } from "./types";

export const AUST: Country = {
  name: "Australia",
  code: "AUST",
  currency: 'AUD'
}

export const NZL: Country = {
  name: "New Zealand",
  code: "NZ",
  currency: 'NZD',
};

export const USA : Country = 
{
  name: "United States",
  code: "USA",
  currency: "USD"
};

export const Countries: Country[] = [
  AUST, NZL, USA
];

export function getCountry(code: string) {
    return Countries.find(x => x.code === code) ?? AUST;
}