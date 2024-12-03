import { useNavigate } from "react-router-dom";
import { getCharacterIndexFromUrl } from "../utility";
import { Character } from "../types/Character";

// =================================================================================================
// CharacterLinks Component
// Create clickable links to specific characters
// =================================================================================================

export const CharacterLinks = (props: { characters: Character[] }) => {
  const navigate = useNavigate();
  const { characters } = props;
  return (
    <>
      {characters.map((character, index) => (
        <span key={character.url}>
          <span
            className="UnderlineOnHover"
            style={{ cursor: "pointer" }}
            onClick={() =>
              navigate(`/characters/${getCharacterIndexFromUrl(character.url)}`)
            }
          >
            {character.name || character.aliases[0]}
          </span>
          {index < characters.length - 1 && ", "}
        </span>
      ))}
    </>
  );
};
