import { Card, CardContent, Stack, Typography } from "@mui/material";
import { House } from "../types/House";
import { Character } from "../types/Character";
import { memo } from "react";
import { Explorer } from "./Explorer";
import { useParams } from "react-router-dom";
import { Book } from "../types/Book";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import { BookLinks, CharacterLinks } from "./SpecificBook";
import { URLsToBooks, URLsToCharacters, URLsToHouses } from "../utility";
import { HouseLinks } from "./SpecificHouse";

interface SpecificCharacterProps {
  houses: House[];
  characters: Character[];
  books: Book[];
}

export const SpecificCharacter = memo(
  ({ books, houses, characters }: SpecificCharacterProps) => {
    const { index } = useParams() ?? "1";
    const character = characters[Number(index) - 1];
    if (!character) {
      return null; // Not received props yet
    }
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
                {character.name || character.aliases[0]}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontFamily: "GOT", wordSpacing: 4 }}
              >
                {character.gender === "Male" ? <MaleIcon /> : <FemaleIcon />}
              </Typography>
              <Typography variant="body1">
                Culture: {character.culture}
              </Typography>
              <Typography variant="body1">Born: {character.born}</Typography>
              <Typography variant="body1">Died: {character.died}</Typography>
              <Typography variant="body1">
                Titles: {character.titles.join(", ")}
              </Typography>
              <Typography variant="body1">
                Aliases: {character.aliases.join(", ")}
              </Typography>
              <Typography variant="body1">
                Father:{" "}
                {character.father && (
                  <CharacterLinks
                    characters={URLsToCharacters(
                      [character.father],
                      characters
                    )}
                  />
                )}
              </Typography>
              <Typography variant="body1">
                Mother:{" "}
                {character.mother && (
                  <CharacterLinks
                    characters={URLsToCharacters(
                      [character.mother],
                      characters
                    )}
                  />
                )}
              </Typography>
              <Typography variant="body1">
                Spouse:{" "}
                {character.spouse && (
                  <CharacterLinks
                    characters={URLsToCharacters(
                      [character.spouse],
                      characters
                    )}
                  />
                )}
              </Typography>
              <Typography variant="body1">
                Allegiances:{" "}
                <HouseLinks
                  houses={URLsToHouses(character.allegiances, houses)}
                />
              </Typography>
              <Typography variant="body1">
                Books: <BookLinks books={URLsToBooks(character.books, books)} />
              </Typography>
              <Typography variant="body1">
                POV Books:{" "}
                <BookLinks books={URLsToBooks(character.povBooks, books)} />
              </Typography>
              <Typography variant="body1">
                TV Series: {character.tvSeries.join(", ")}
              </Typography>
              <Typography variant="body1">
                Played by: {character.playedBy.join(", ")}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    );
  }
);
