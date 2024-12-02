import { Typography } from "@mui/material";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

interface RouteLinkProps {
  route: string;
  text: string;
}

// =================================================================================================
// RouteLink component
// Clickable text for navigating to a route
// =================================================================================================

export const RouteLink = memo(({ route, text }: RouteLinkProps) => {
  const navigate = useNavigate();
  return (
    <Typography
      variant="h6"
      component="div"
      sx={{ fontFamily: "GOT", cursor: "pointer", flex: 1 }}
      onClick={() => navigate(route)}
    >
      {text}
    </Typography>
  );
});
