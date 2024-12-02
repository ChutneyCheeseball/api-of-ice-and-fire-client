import { Card, CardContent, Stack } from "@mui/material";
import { Book } from "../types/Book";
import { BookDetails } from "./BookDetails";
import { memo } from "react";

interface BookListItemProps {
  book: Book;
}

// =================================================================================================
// BookListItem Component
// Shows the book details and cover art side-by-side
// =================================================================================================

export const BookListItem = memo(({ book }: BookListItemProps) => {
  return (
    <Stack
      direction="row"
      sx={{ margin: 2, cursor: "pointer" }}
      onClick={() => console.log(book.name)}
    >
      {/* Card for book details */}
      <Card sx={{ width: 200, height: 250, marginRight: 1 }}>
        <CardContent>
          <BookDetails book={book} />
        </CardContent>
      </Card>
      {/* Card for book cover art - from OpenLibrary */}
      <Card
        sx={{
          width: 200,
          height: 250,
          backgroundColor: "transparent",
        }}
      >
        <img
          src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`}
          alt={`${book.name} Cover Art`}
          title={`${book.name} Cover Art`}
          style={{ width: 200, height: 250 }}
        />
      </Card>
    </Stack>
  );
});
