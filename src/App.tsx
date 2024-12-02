import { Button, Container } from "@mui/material";
import { getAllBooks } from "./APIs/BooksAPI";
import { useState } from "react";
import { Book } from "./types/Book";
import { BookList } from "./components/BookList";

// =================================================================================================
// App Component
// An API of Ice and Fire client
// =================================================================================================

function App() {
  const getBooks = async () => {
    const books = await getAllBooks(true); // Mocked response
    if (books !== null) {
      setBooks(books);
    }
  };

  const [books, setBooks] = useState<Book[]>([]);

  return (
    <div className="App">
      <Container maxWidth="xl" className="MainContainer">
        <Button variant="contained" onClick={getBooks}>
          Get All Books
        </Button>
        <BookList books={books} />
      </Container>
    </div>
  );
}

export default App;
