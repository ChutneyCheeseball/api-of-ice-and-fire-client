import { Stack } from "@mui/material";
import { Book } from "../types/Book";
import { Character } from "../types/Character";
import { memo } from "react";
import { Explorer } from "./Explorer";
import { useParams } from "react-router-dom";

interface SpecificBookProps {
  books: Book[];
  characters: Character[];
}

export const SpecificBook = memo(({ books, characters }: SpecificBookProps) => {
  const { index } = useParams() ?? "1";
  return (
    <Stack spacing={4}>
      <Explorer />
      <pre>{JSON.stringify(books[Number(index) - 1], null, 2)}</pre>
    </Stack>
  );
});
