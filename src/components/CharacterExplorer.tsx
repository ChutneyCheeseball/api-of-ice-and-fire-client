import { Stack } from "@mui/material";
import { Character } from "../types/Character";
import { CharacterList } from "./CharacterList";
import { Explorer } from "./Explorer";
import { memo } from "react";

interface CharacterExplorerProps {
  characters: Character[];
}

// =================================================================================================
// CharacterExplorer Component
// =================================================================================================

export const CharacterExplorer = memo(
  ({ characters }: CharacterExplorerProps) => {
    return (
      <div>
        <Stack spacing={2}>
          <Explorer />
          <CharacterList characters={characters} />
        </Stack>
      </div>
    );
  }
);
