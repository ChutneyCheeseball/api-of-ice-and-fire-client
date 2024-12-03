import { Card, CardContent, Stack, Typography } from "@mui/material";
import { House } from "../types/House";
import { Character } from "../types/Character";
import { memo } from "react";
import { Explorer } from "./Explorer";
import { useParams } from "react-router-dom";
import { URLsToCharacters, URLsToHouses } from "../utility";
import { CharacterLinks } from "./CharacterLinks";
import { HouseLinks } from "./HouseLinks";

interface SpecificHouseProps {
  houses: House[];
  characters: Character[];
}

// =================================================================================================
// SpecificHouse Component
// Show everything we know about a house
// =================================================================================================

export const SpecificHouse = memo(
  ({ houses, characters }: SpecificHouseProps) => {
    const { index } = useParams() ?? "1";
    const house = houses[Number(index) - 1];
    if (!house) {
      return null; // Not received props yet
    }
    // Character URL resources
    const currentLord = house.currentLord
      ? URLsToCharacters([house.currentLord], characters)[0]
      : null;
    const heir = house.heir
      ? URLsToCharacters([house.heir], characters)[0]
      : null;
    const founder = house.founder
      ? URLsToCharacters([house.founder], characters)[0]
      : null;
    const swornMembers =
      house.swornMembers.length > 0
        ? URLsToCharacters(house.swornMembers, characters)
        : [];
    // House URL resources
    const overlord = house.overlord
      ? URLsToHouses([house.overlord], houses)[0]
      : null;
    const cadetBranches =
      house.cadetBranches.length > 0
        ? URLsToHouses(house.cadetBranches, houses)
        : [];
    return (
      <Stack spacing={4}>
        <Explorer />
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Typography
                variant="h3"
                component="div"
                sx={{ fontFamily: "GOT", wordSpacing: 4 }}
              >
                {house.name}
              </Typography>
              {house.words && (
                <Typography variant="h6" sx={{ flex: 2, fontStyle: "italic" }}>
                  {`"${house.words}"`}
                </Typography>
              )}
              <Typography variant="body1">Region: {house.region}</Typography>
              <Typography variant="body1">
                Coat of Arms: {house.coatOfArms}
              </Typography>
              <Typography variant="body1">
                Titles: {house.titles.join(", ")}
              </Typography>
              <Typography variant="body1">
                Seats: {house.seats.join(", ")}
              </Typography>
              <Typography variant="body1">
                Current Lord:{" "}
                {currentLord && <CharacterLinks characters={[currentLord]} />}
              </Typography>
              <Typography variant="body1">
                Heir: {heir && <CharacterLinks characters={[heir]} />}
              </Typography>
              <Typography variant="body1">
                Overlord: {overlord && <HouseLinks houses={[overlord]} />}
              </Typography>
              <Typography variant="body1">Founded: {house.founded}</Typography>
              <Typography variant="body1">
                Founder: {founder && <CharacterLinks characters={[founder]} />}
              </Typography>
              <Typography variant="body1">Died out: {house.diedOut}</Typography>
              <Typography variant="body1">
                Ancestral weapons: {house.ancestralWeapons.join(", ")}
              </Typography>
              <div>
                <Typography
                  variant="body1"
                  sx={{ borderBottom: 1, marginBottom: 1 }}
                >
                  Cadet branches:
                </Typography>
                <HouseLinks houses={cadetBranches} />
              </div>
              <div>
                <Typography
                  variant="body1"
                  sx={{ borderBottom: 1, marginBottom: 1 }}
                >
                  Sworn members:
                </Typography>
                <CharacterLinks characters={swornMembers} />
              </div>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    );
  }
);
