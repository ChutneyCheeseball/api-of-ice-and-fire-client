import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface RouteLinkProps {
  route: string;
  text: string;
}

export const RouteLink = ({ route, text }: RouteLinkProps) => {
  const navigate = useNavigate();
  return (
    <Typography
      variant="h6"
      component="div"
      sx={{ fontFamily: "GOT", cursor: "pointer" }}
      onClick={() => navigate(route)}
    >
      {text}
    </Typography>
  );
};
