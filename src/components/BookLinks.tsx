import { useNavigate } from "react-router-dom";
import { Book } from "../types/Book";
import { getBookIndexFromUrl } from "../utility";

// =================================================================================================
// BookLinks Component
// Create clickable links to specific houses
// =================================================================================================

export const BookLinks = (props: { books: Book[] }) => {
  const navigate = useNavigate();
  const { books } = props;
  return (
    <>
      {books.map((book, index) => (
        <span key={book.url}>
          <span
            className="UnderlineOnHover"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/books/${getBookIndexFromUrl(book.url)}`)}
          >
            {book.name}
          </span>
          {index < books.length - 1 && ", "}
        </span>
      ))}
    </>
  );
};
