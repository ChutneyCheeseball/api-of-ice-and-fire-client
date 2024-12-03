import { Card, CardContent, Stack } from "@mui/material";
import { Book } from "../types/Book";
import { BookDetails } from "./BookDetails";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

interface BookListItemProps {
  book: Book;
  index: number;
}

const width = 220;
const height = 275;

// =================================================================================================
// BookListItem Component
// Shows the book details and cover art side-by-side
// =================================================================================================

export const BookListItem = memo(({ book, index }: BookListItemProps) => {
  const navigate = useNavigate();
  return (
    <Stack
      direction="row"
      sx={{ margin: 2, cursor: "pointer" }}
      onClick={() => navigate(`/books/${index}`)}
    >
      {/* Card for book details */}
      <Card sx={{ width, height, marginRight: 1 }}>
        <CardContent>
          <BookDetails book={book} />
        </CardContent>
      </Card>
      {/* Card for book cover art - from OpenLibrary */}
      <Card
        sx={{
          width,
          height,
          backgroundColor: "transparent",
        }}
      >
        <img
          src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`}
          alt={`${book.name} Cover Art`}
          title={`${book.name} Cover Art`}
          style={{ width, height }}
        />
      </Card>
    </Stack>
  );
});
