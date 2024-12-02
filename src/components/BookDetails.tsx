import { Typography, Stack } from "@mui/material";
import { Book } from "../types/Book";
import { monthNames } from "../utility";
import { memo } from "react";

interface BookDetailsProps {
  book: Book;
}

// =================================================================================================
// BookDetails Component
// Shows the basic details of a book
// =================================================================================================

export const BookDetails = memo(({ book }: BookDetailsProps) => {
  const releaseDate = new Date(book.released);
  return (
    <Stack spacing={1}>
      <Typography
        variant="h6"
        component="div"
        sx={{ fontFamily: "GOT", fontSize: 16 }}
      >
        {book.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        By {book.authors.join(", ")}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Released {releaseDate.getDate()} {monthNames[releaseDate.getMonth()]}{" "}
        {releaseDate.getFullYear()}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        ISBN: {book.isbn}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {book.numberOfPages} pages
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {book.publisher}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Media Type: {book.mediaType}
      </Typography>
    </Stack>
  );
});
