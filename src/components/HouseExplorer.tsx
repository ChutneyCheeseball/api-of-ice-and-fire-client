import { Stack } from "@mui/material";
import { RouteLink } from "./RouteLink";
import { House } from "../types/House";
import { HouseList } from "./HouseList";
import { Explorer } from "./Explorer";
import { memo } from "react";

interface HouseExplorerProps {
  houses: House[];
}

// =================================================================================================
// HouseExplorer Component
// =================================================================================================

export const HouseExplorer = memo(({ houses }: HouseExplorerProps) => {
  return (
    <div>
      <Stack spacing={2}>
        <Explorer />
        <HouseList houses={houses} />
      </Stack>
    </div>
  );
});
