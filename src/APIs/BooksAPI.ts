import axios from "axios";
import { Book } from "../types/Book";
import { AllBooks } from "../mocked/AllBooks";

const booksAPI = axios.create({
  baseURL: "https://www.anapioficeandfire.com/api/books",
});

// =================================================================================================
// getBooks - get one page worth of books
// =================================================================================================

export const getBooks = async (page = 1, pageSize = 10) => {
  try {
    console.log("Fetching page", page, "of results");
    const response = await booksAPI.get("", {
      params: {
        page,
        pageSize,
      },
    });
    if (response.status === 200) {
      console.log("Got", response.data.length, "item(s)");
      return response.data as Book[];
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};
