import { Stack } from "@mui/material";
import { House } from "../types/House";
import { Character } from "../types/Character";
import { memo } from "react";
import { Explorer } from "./Explorer";
import { useParams } from "react-router-dom";

interface SpecificHouseProps {
  houses: House[];
  characters: Character[];
}

export const SpecificHouse = memo(
  ({ houses, characters }: SpecificHouseProps) => {
    const { index } = useParams() ?? "1";
    return (
      <Stack spacing={4}>
        <Explorer />
        <pre>{JSON.stringify(houses[Number(index) - 1], null, 2)}</pre>
      </Stack>
    );
  }
);
