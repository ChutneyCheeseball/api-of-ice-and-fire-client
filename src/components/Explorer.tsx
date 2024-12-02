import { Stack, Typography } from "@mui/material";
import { RouteLink } from "./RouteLink";
import { memo } from "react";

// =================================================================================================
// Explorer Component
// Choose which API to explore
// =================================================================================================

export const Explorer = memo(() => {
  return (
    <div>
      <Typography variant="h5" component="div">
        Explore the world of A Song of Ice and Fire
      </Typography>
      <br />
      <Stack direction="row" justifyContent={"space-around"}>
        <RouteLink text="Books" route="/books" />
        <RouteLink text="Houses" route="/houses" />
        <RouteLink text="Characters" route="/characters" />
      </Stack>
    </div>
  );
});
