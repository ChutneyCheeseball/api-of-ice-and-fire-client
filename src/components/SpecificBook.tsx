import { Card, CardContent, Stack, Typography } from "@mui/material";
import { Book } from "../types/Book";
import { Character } from "../types/Character";
import { memo } from "react";
import { Explorer } from "./Explorer";
import { useParams } from "react-router-dom";
import { monthNames, URLsToCharacters } from "../utility";
import { CharacterLinks } from "./CharacterLinks";

interface SpecificBookProps {
  books: Book[];
  characters: Character[];
}

// =================================================================================================
// SpecificBook Component
// Show everything we know about a book
// =================================================================================================

export const SpecificBook = memo(({ books, characters }: SpecificBookProps) => {
  const { index } = useParams() ?? "1";
  const book = books[Number(index) - 1];
  if (!book) {
    return null; // Not received props yet
  }
  const releaseDate = new Date(book.released);
  const bookCharacters = URLsToCharacters(book.characters, characters);
  const povCharacters = URLsToCharacters(book.povCharacters, characters);
  console.log(JSON.stringify(book));
  return (
    <Stack spacing={4}>
      <Explorer />
      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Typography
              variant="h3"
              component="div"
              sx={{ fontFamily: "GOT", wordSpacing: 4 }}
            >
              {book.name}
            </Typography>
            <Typography variant="body1">
              By {book.authors.join(", ")}
            </Typography>
            <Typography variant="body1">
              Released {releaseDate.getDate()}{" "}
              {monthNames[releaseDate.getMonth()]} {releaseDate.getFullYear()}
            </Typography>
            <Typography variant="body1">ISBN: {book.isbn}</Typography>
            <Typography variant="body1">{book.numberOfPages} pages</Typography>
            <Typography variant="body1">{book.mediaType}</Typography>
            <Typography variant="body1">
              Published by {book.publisher}
            </Typography>
            <Typography variant="body1">{book.country}</Typography>
            <div>
              <img
                src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`}
                alt={`${book.name} Cover Art`}
                title={`${book.name} Cover Art`}
                style={{
                  width: 325,
                  height: 500,
                  border: "1px solid rgba(0,0,0,0.25)",
                }}
              />
            </div>
            {bookCharacters.length > 0 && (
              <div>
                <Typography
                  variant="body1"
                  sx={{ borderBottom: 1, marginBottom: 1 }}
                >
                  Characters:
                </Typography>
                <CharacterLinks characters={bookCharacters} />
              </div>
            )}
            {povCharacters.length > 0 && (
              <div>
                <Typography
                  variant="body1"
                  sx={{ borderBottom: 1, marginBottom: 1 }}
                >
                  POV Characters:
                </Typography>
                <CharacterLinks characters={povCharacters} />
              </div>
            )}
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
});
