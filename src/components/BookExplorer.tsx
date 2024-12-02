import { Stack } from "@mui/material";
import { BookList } from "./BookList";
import { Book } from "../types/Book";
import { Explorer } from "./Explorer";
import { memo } from "react";

interface BookExplorerProps {
  books: Book[];
}

// =================================================================================================
// BookExplorer Component
// =================================================================================================

export const BookExplorer = memo(({ books }: BookExplorerProps) => {
  return (
    <div>
      <Stack spacing={4}>
        <Explorer active="books" />
        <BookList books={books} />
      </Stack>
    </div>
  );
});
