import { Stack, Typography } from "@mui/material";
import { Character } from "../types/Character";
import { memo } from "react";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";

interface CharacterListItemProps {
  character: Character;
  index: number;
}

// =================================================================================================
// CharacterListItem Component
// Shows the Character details as a table row
// =================================================================================================

export const CharacterListItem = memo(
  ({ character, index }: CharacterListItemProps) => {
    return (
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"center"}
        className="ListRow"
        onClick={() => console.log(index, character)}
        sx={{ minHeight: 40, cursor: "pointer" }}
      >
        <Typography variant="body1" sx={{ flex: 1 }}>
          {index}
        </Typography>
        <Typography variant="body1" sx={{ flex: 2 }}>
          {character.name || "(unnamed)"}
        </Typography>
        <Typography variant="body1" sx={{ flex: 2 }}>
          {character.aliases.length > 0 && character.aliases[0]}
        </Typography>
        <Typography variant="body1" sx={{ flex: 1 }}>
          {character.gender === "Male" ? <MaleIcon /> : <FemaleIcon />}
        </Typography>
        <Typography variant="body1" sx={{ flex: 2 }}>
          {character.culture}
        </Typography>
      </Stack>
    );
  }
);
