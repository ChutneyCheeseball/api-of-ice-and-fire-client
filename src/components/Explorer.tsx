import { Stack, Typography } from "@mui/material";
import { RouteLink } from "./RouteLink";
import { memo } from "react";
import { APIItem } from "../APIs/AAOIAF";

// =================================================================================================
// Explorer Component
// Choose which API to explore
// =================================================================================================

export const Explorer = memo((props: { active?: APIItem }) => {
  return (
    <div>
      <Typography variant="h5" component="div">
        Explore the world of A Song of Ice and Fire
      </Typography>
      <br />
      <Stack direction="row" justifyContent={"space-around"}>
        <RouteLink
          text="Books"
          route="/books"
          active={props.active === "books"}
        />
        <RouteLink
          text="Houses"
          route="/houses"
          active={props.active === "houses"}
        />
        <RouteLink
          text="Characters"
          route="/characters"
          active={props.active === "characters"}
        />
      </Stack>
    </div>
  );
});
