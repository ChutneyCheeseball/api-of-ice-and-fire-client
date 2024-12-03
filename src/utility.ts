import { Book } from "./types/Book";
import { Character } from "./types/Character";
import { House } from "./types/House";

// Simpler than instantiating an Intl.DateTimeFormat object
export const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Used for faking API response times, etc.
export function timeout(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// https://www.anapioficeandfire.com/api/characters/10 -> 10
export const getCharacterIndexFromUrl = (url: string) => {
  return Number(
    url.split("https://www.anapioficeandfire.com/api/characters/")[1]
  );
};

// https://www.anapioficeandfire.com/api/houses/10 -> 10
export const getHouseIndexFromUrl = (url: string) => {
  return Number(url.split("https://www.anapioficeandfire.com/api/houses/")[1]);
};

// https://www.anapioficeandfire.com/api/books/10 -> 10
export const getBookIndexFromUrl = (url: string) => {
  return Number(url.split("https://www.anapioficeandfire.com/api/books/")[1]);
};

export const URLsToCharacters = (urls: string[], characters: Character[]) => {
  const result: Character[] = [];
  for (let u of urls) {
    result.push(characters[getCharacterIndexFromUrl(u) - 1]);
  }
  return result;
};

export const URLsToHouses = (urls: string[], houses: House[]) => {
  const result: House[] = [];
  for (let u of urls) {
    result.push(houses[getHouseIndexFromUrl(u) - 1]);
  }
  return result;
};

export const URLsToBooks = (urls: string[], books: Book[]) => {
  const result: Book[] = [];
  for (let u of urls) {
    result.push(books[getBookIndexFromUrl(u) - 1]);
  }
  return result;
};
