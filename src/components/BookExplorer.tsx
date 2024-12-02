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
      <Stack spacing={2}>
        <Explorer />
        <BookList books={books} />
      </Stack>
    </div>
  );
});
