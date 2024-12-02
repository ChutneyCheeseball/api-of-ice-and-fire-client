import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Explorer } from "./components/Explorer";
import { BookExplorer } from "./components/BookExplorer";
import { HouseExplorer } from "./components/HouseExplorer";
import { CharacterExplorer } from "./components/CharacterExplorer";

// =================================================================================================
// App Component
// An explorer client for An API of Ice and Fire
// =================================================================================================

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg" className="MainContainer">
        <Routes>
          <Route path="/" element={<Explorer />} />
          <Route path="/books" element={<BookExplorer />} />
          <Route path="/houses" element={<HouseExplorer />} />
          <Route path="/characters" element={<CharacterExplorer />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
