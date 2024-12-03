import { Card, CardContent, Stack, Typography } from "@mui/material";
import { Book } from "../types/Book";
import { Character } from "../types/Character";
import { memo } from "react";
import { Explorer } from "./Explorer";
import { useNavigate, useParams } from "react-router-dom";
import {
  getBookIndexFromUrl,
  getCharacterIndexFromUrl,
  monthNames,
  URLsToCharacters,
} from "../utility";

interface SpecificBookProps {
  books: Book[];
  characters: Character[];
}

export const CharacterLinks = (props: { characters: Character[] }) => {
  const navigate = useNavigate();
  const { characters } = props;
  return (
    <>
      {characters.map((character, index) => (
        <span key={character.url}>
          <span
            className="UnderlineOnHover"
            style={{ cursor: "pointer" }}
            onClick={() =>
              navigate(`/characters/${getCharacterIndexFromUrl(character.url)}`)
            }
          >
            {character.name || character.aliases[0]}
          </span>
          {index < characters.length - 1 && ", "}
        </span>
      ))}
    </>
  );
};

export const BookLinks = (props: { books: Book[] }) => {
  const navigate = useNavigate();
  const { books } = props;
  return (
    <>
      {books.map((book, index) => (
        <span key={book.url}>
          <span
            className="UnderlineOnHover"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/books/${getBookIndexFromUrl(book.url)}`)}
          >
            {book.name}
          </span>
          {index < books.length - 1 && ", "}
        </span>
      ))}
    </>
  );
};

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
