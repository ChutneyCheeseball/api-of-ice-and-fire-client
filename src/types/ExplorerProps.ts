import { Book } from "./Book";
import { Character } from "./Character";
import { House } from "./House";

export interface ExplorerProps {
  books: Book[];
  houses: House[];
  characters: Character[];
}
