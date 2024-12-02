import { Stack, Typography } from "@mui/material";
import { House } from "../types/House";
import { memo, useEffect, useState } from "react";
import { HouseListItem } from "./HouseListItem";
import { Pagination } from "./Pagination";

interface HouseListProps {
  houses: House[];
}

const itemsPerPage = 100;

// =================================================================================================
// HouseList Component
// Lists houses inside a container
// =================================================================================================

export const HouseList = memo(({ houses }: HouseListProps) => {
  const [activePage, setActivePage] = useState(1);
  const pageCount = Math.ceil(houses.length / itemsPerPage);

  const pageItems = houses.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  useEffect(() => {
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 20);
  }, [activePage]);

  return (
    <div>
      <Stack
        direction="row"
        justifyContent={"space-evenly"}
        sx={{ borderBottom: "1px solid black" }}
      >
        <Typography variant="body1" sx={{ flex: 1 }}>
          #
        </Typography>
        <Typography variant="body1" sx={{ flex: 2 }}>
          Name
        </Typography>
        <Typography variant="body1" sx={{ flex: 2 }}>
          Region
        </Typography>
        <Typography variant="body1" sx={{ flex: 2 }}>
          Words
        </Typography>
      </Stack>
      {pageItems.map((house, index) => (
        <HouseListItem
          key={index}
          index={(activePage - 1) * itemsPerPage + index + 1}
          house={house}
        />
      ))}
      <Pagination
        numberOfPages={pageCount}
        activePage={activePage}
        onClick={(pageNumber) => {
          setActivePage(pageNumber);
        }}
      />
    </div>
  );
});
