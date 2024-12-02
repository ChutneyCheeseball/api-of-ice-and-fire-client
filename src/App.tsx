import { CircularProgress, Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Explorer } from "./components/Explorer";
import { BookExplorer } from "./components/BookExplorer";
import { HouseExplorer } from "./components/HouseExplorer";
import { CharacterExplorer } from "./components/CharacterExplorer";
import { useEffect, useState } from "react";
import { Character } from "./types/Character";
import { House } from "./types/House";
import { Book } from "./types/Book";
import { APIItem, getAllItems } from "./APIs/AAOIAF";

// =================================================================================================
// App Component
// An explorer client for An API of Ice and Fire
// =================================================================================================

function App() {
  // -----------------------------------------------------------------------------------------------
  // Hooks
  // -----------------------------------------------------------------------------------------------

  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [houses, setHouses] = useState<House[]>([]);
  const [characters, setCharacters] = useState<Character[]>([]);

  // -----------------------------------------------------------------------------------------------
  // Calls to fetch and set all our data from local storage or remote API
  // -----------------------------------------------------------------------------------------------

  const setItem = (item: APIItem, value: (Book | House | Character)[]) => {
    switch (item) {
      case "books":
        setBooks(value as Book[]);
        break;
      case "houses":
        setHouses(value as House[]);
        break;
      case "characters":
        setCharacters(value as Character[]);
        break;
    }
  };

  useEffect(() => {
    const fetchItems = async (item: APIItem, pageSize: number) => {
      const storedItems = localStorage.getItem(item);
      if (storedItems === null) {
        console.log(`No ${item} in storage`);
        const result = await getAllItems(item, pageSize);
        if (result !== null) {
          console.log(`Setting ${result.length} ${item} in storage"`);
          setItem(item, result);
          localStorage.setItem(item, JSON.stringify(result));
        }
      } else {
        console.log(`Loading ${item} from storage`);
        setItem(item, JSON.parse(storedItems));
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await fetchItems("books", 20);
      await fetchItems("houses", 50);
      await fetchItems("characters", 50);
      setLoading(false);
    };

    fetchData();
  }, []);

  // -----------------------------------------------------------------------------------------------
  // Main render
  // -----------------------------------------------------------------------------------------------

  return (
    <div className="App">
      <Container maxWidth="lg" className="MainContainer">
        {loading ? (
          <CircularProgress />
        ) : (
          <Routes>
            <Route path="/" element={<Explorer />} />
            <Route path="/books" element={<BookExplorer books={books} />} />
            <Route path="/houses" element={<HouseExplorer houses={houses} />} />
            <Route
              path="/characters"
              element={<CharacterExplorer characters={characters} />}
            />
          </Routes>
        )}
      </Container>
    </div>
  );
}

export default App;
