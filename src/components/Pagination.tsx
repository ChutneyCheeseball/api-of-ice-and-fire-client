import { Stack } from "@mui/material";
import { memo } from "react";

interface PaginationProps {
  numberOfPages: number;
  activePage: number;
  onClick: (pageNumber: number) => void;
}

// =================================================================================================
// Pagination Component
// Creates page numbers for clicking, e.g. 1 2 3 4
// =================================================================================================

export const Pagination = memo(
  ({ numberOfPages, activePage, onClick }: PaginationProps) => {
    const p = [];
    for (let i = 1; i <= numberOfPages; i++) {
      p.push(
        <span
          style={{
            cursor: "pointer",
            fontWeight: i === activePage ? "bold" : "normal",
          }}
          onClick={() => onClick(i)}
        >
          {i}
        </span>
      );
    }
    return (
      <Stack
        direction="row"
        justifyContent={"space-evenly"}
        sx={{ marginTop: 2, borderTop: "1px solid black", paddingTop: 2 }}
      >
        {p}
      </Stack>
    );
  }
);
