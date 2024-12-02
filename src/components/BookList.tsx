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
      {books.map((book, index) => (
        <BookListItem key={index} index={index + 1} book={book} />
      ))}
    </Stack>
  );
});
