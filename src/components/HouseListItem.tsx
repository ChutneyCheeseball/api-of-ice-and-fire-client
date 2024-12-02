import { Card, CardContent, Stack, Typography } from "@mui/material";
import { House } from "../types/House";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

interface HouseListItemProps {
  house: House;
  index: number;
}

// =================================================================================================
// HouseListItem Component
// Shows the House details and cover art side-by-side
// =================================================================================================

export const HouseListItem = memo(({ house, index }: HouseListItemProps) => {
  const navigate = useNavigate();
  return (
    <Stack
      direction="row"
      alignItems={"center"}
      justifyContent={"center"}
      className="ListRow"
      onClick={() => navigate(`/houses/${index}`)}
      sx={{ minHeight: 40, cursor: "pointer" }}
    >
      <Typography variant="body1" sx={{ flex: 1 }}>
        {index}
      </Typography>
      <Typography variant="body1" sx={{ flex: 2 }}>
        {house.name}
      </Typography>
      <Typography variant="body1" sx={{ flex: 2 }}>
        {house.region}
      </Typography>
      <Typography variant="body1" sx={{ flex: 2, fontStyle: "italic" }}>
        {house.words && `"${house.words}"`}
      </Typography>
    </Stack>
  );
});
