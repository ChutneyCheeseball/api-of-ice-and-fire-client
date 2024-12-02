import { Stack } from "@mui/material";
import { House } from "../types/House";
import { Character } from "../types/Character";
import { memo } from "react";
import { Explorer } from "./Explorer";
import { useParams } from "react-router-dom";
import { Book } from "../types/Book";

interface SpecificCharacterProps {
  houses: House[];
  characters: Character[];
  books: Book[];
}

export const SpecificCharacter = memo(
  ({ houses, characters }: SpecificCharacterProps) => {
    const { index } = useParams() ?? "1";

    return (
      <Stack spacing={4}>
        <Explorer />
        <pre>{JSON.stringify(characters[Number(index) - 1], null, 2)}</pre>
      </Stack>
    );
  }
);
