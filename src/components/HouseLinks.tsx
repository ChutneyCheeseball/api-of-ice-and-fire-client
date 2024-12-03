import { useNavigate } from "react-router-dom";
import { House } from "../types/House";
import { getHouseIndexFromUrl } from "../utility";

// =================================================================================================
// HouseLinks Component
// Create clickable links to specific houses
// =================================================================================================

export const HouseLinks = (props: { houses: House[] }) => {
  const navigate = useNavigate();
  const { houses } = props;
  return (
    <>
      {houses.map((house, index) => (
        <span key={house.url}>
          <span
            className="UnderlineOnHover"
            style={{ cursor: "pointer" }}
            onClick={() =>
              navigate(`/houses/${getHouseIndexFromUrl(house.url)}`)
            }
          >
            {house.name}
          </span>
          {index < houses.length - 1 && ", "}
        </span>
      ))}
    </>
  );
};
