import { Stack, Typography } from "@mui/material";
import { Character } from "../types/Character";
import { memo, useEffect, useState } from "react";
import { CharacterListItem } from "./CharacterListItem";
import { Pagination } from "./Pagination";

interface CharacterListProps {
  characters: Character[];
}

const itemsPerPage = 100;

// =================================================================================================
// CharacterList Component
// Lists characters inside a table
// =================================================================================================

export const CharacterList = memo(({ characters }: CharacterListProps) => {
  const [activePage, setActivePage] = useState(1);
  const pageCount = Math.ceil(characters.length / itemsPerPage);

  const pageItems = characters.slice(
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
          Alias
        </Typography>
        <Typography variant="body1" sx={{ flex: 1 }}>
          Gender
        </Typography>
        <Typography variant="body1" sx={{ flex: 2 }}>
          Culture
        </Typography>
      </Stack>
      {pageItems.map((character, index) => (
        <CharacterListItem
          key={index}
          index={(activePage - 1) * itemsPerPage + index + 1}
          character={character}
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
