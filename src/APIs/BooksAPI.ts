import axios from "axios";
import { Book } from "../types/Book";
import { AllBooks } from "../mocked/AllBooks";

const booksAPI = axios.create({
  baseURL: "https://www.anapioficeandfire.com/api/books",
});

export const getAllBooks = async (mocked = false) => {
  if (mocked) {
    return AllBooks;
  }
  try {
    const response = await booksAPI.get("");
    if (response.status === 200) {
      return response.data as Book[];
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

export const getBookNumber = async (num: number) => {
  try {
    const response = await booksAPI.get(`/${num}`);
    if (response.status === 200) {
      return response.data as Book[];
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};
