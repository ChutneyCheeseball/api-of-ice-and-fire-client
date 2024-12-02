import { Stack } from "@mui/material";
import { Book } from "../types/Book";
import { BookListItem } from "./BookListItem";
import { memo } from "react";

interface BookListProps {
  books: Book[];
}

// =================================================================================================
// BookList Component
// Lists books inside a container
// =================================================================================================

export const BookList = memo(({ books }: BookListProps) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      spacing={0}
      justifyContent={"space-evenly"}
    >
      {books.map((book) => (
        <BookListItem key={book.name} book={book} />
      ))}
    </Stack>
  );
});
