import { useState } from "react";
import { getBooks } from "../APIs/BooksAPI";
import { Book } from "../types/Book";
import { Button, Stack } from "@mui/material";
import { BookList } from "./BookList";
import { RouteLink } from "./RouteLink";

export const BookExplorer = () => {
  const [busy, setBusy] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);

  // Fetching data
  const fetchBooks = async () => {
    setBusy(true);
    setBooks([]);
    const fetchedBooks: Book[] = [];
    let page = 1;
    const pageSize = 10; // Fetch 10 at a time (this is the default anyway)
    while (true) {
      const result = await getBooks(page, pageSize);
      if (result !== null) {
        fetchedBooks.push(...result);
      } else {
        // We are not doing retries or anything fancy, just give up
        break;
      }
      if (result.length < pageSize) {
        setBooks(fetchedBooks);
        break;
      } else {
        page++; // Get next page
      }
    }
    setBusy(false);
  };

  return (
    <div>
      <Stack spacing={2}>
        <RouteLink route="/" text="Back" />
        <Button variant="contained" onClick={fetchBooks} disabled={busy}>
          Get All Books
        </Button>
        <BookList books={books} />
      </Stack>
    </div>
  );
};
