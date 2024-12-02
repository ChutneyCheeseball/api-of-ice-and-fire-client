import axios from "axios";
import { Book } from "../types/Book";
import { Character } from "../types/Character";
import { House } from "../types/House";

const API = axios.create({
  baseURL: "https://www.anapioficeandfire.com/api/",
});

export type APIItem = "books" | "houses" | "characters";

// =================================================================================================
// getItems - get one page worth of results
// =================================================================================================

export const getItems = async (item: APIItem, page = 1, pageSize = 10) => {
  try {
    console.log(`Fetching ${item} page ${page}`);
    const response = await API.get(item, {
      params: {
        page,
        pageSize,
      },
    });
    if (response.status === 200) {
      console.log(`Got ${response.data.length} ${item}`);
      switch (item) {
        case "books":
          return response.data as Book[];

        case "houses":
          return response.data as House[];

        case "characters":
          return response.data as Character[];
      }
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

// =================================================================================================
// getAllItems - fetch everything we can
// =================================================================================================

export const getAllItems = async (item: APIItem, pageSize = 10) => {
  let page = 1;
  const items = [];
  while (true) {
    try {
      const result = await getItems(item, page++, pageSize);
      if (result === null) {
        break;
      }
      items.push(...result);
      if (result.length < pageSize) {
        break;
      }
    } catch (e) {
      console.error(e);
      break;
    }
  }
  console.log(`Fetched total ${items.length} ${item}`);
  return items;
};
