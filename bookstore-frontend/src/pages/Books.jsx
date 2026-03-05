import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Search, ShoppingCart, Star, Eye, Heart } from "lucide-react";
import API from "../api/api";
import "../styles/Book.css";

const Books = () => {

  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [hoveredBook, setHoveredBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {

    try {

      const res = await API.get("/books");

      setBooks(res.data);

    } catch (error) {

      console.error("Error fetching books", error);

    } finally {

      setLoading(false);

    }
  };

  const genres = ["All", ...new Set(books.map((b) => b.genre))];

  const filteredBooks = books.filter((book) => {

    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesGenre =
      selectedGenre === "All" || book.genre === selectedGenre;

    return matchesSearch && matchesGenre;

  });

  const renderStars = (rating) => {

    return Array.from({ length: 5 }).map((_, i) => (

      <Star
        key={i}
        className={`w-3.5 h-3.5 ${
          i < Math.floor(rating) ? "star-filled" : "star-empty"
        }`}
        fill={i < Math.floor(rating) ? "currentColor" : "none"}
      />

    ));

  };

  if (loading) {
    return <h2 style={{textAlign:"center",marginTop:"100px"}}>Loading books...</h2>;
  }

  return (
    <div className="book-page">

      {/* Navbar */}

      <nav className="book-nav">

        <Link to="/" className="book-logo">
          <BookOpen className="w-5 h-5" />
          <span>BookNest</span>
        </Link>

        <div className="book-nav-links">

          <Link to="/login" className="book-nav-link">
            Login
          </Link>

          <Link to="/register" className="book-nav-link-cta">
            Sign Up
          </Link>

        </div>

      </nav>

      {/* Header */}

      <header className="book-header">

        <div className="book-header-label">
          COLLECTION
        </div>

        <h1 className="book-page-title">
          Browse Our Books
        </h1>

        <p className="book-page-subtitle">
          Explore hand-picked titles from the world's greatest authors
        </p>

      </header>

      {/* Filters */}

      <div className="book-filters">

        <div className="book-search">

          <Search className="w-4 h-4 search-icon" />

          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
          />

        </div>

        <div className="genre-filters">

          {genres.map((genre)=>(
            <button
              key={genre}
              className={`genre-btn ${selectedGenre === genre ? "active" : ""}`}
              onClick={()=>setSelectedGenre(genre)}
            >
              {genre}
            </button>
          ))}

        </div>

      </div>

      {/* Results */}

      <div className="results-info">

        <span>
          {filteredBooks.length} {filteredBooks.length === 1 ? "book" : "books"} found
        </span>

      </div>

      {/* Books Grid */}

      <div className="book-grid">

        {filteredBooks.map((book)=>(
          <div
            key={book.id}
            className="book-card"
            onMouseEnter={()=>setHoveredBook(book.id)}
            onMouseLeave={()=>setHoveredBook(null)}
          >

            <div className="book-card-image">

              <img src={book.imageUrl} alt={book.title} />

              <div className="book-card-overlay">

                <button className="overlay-btn">
                  <Eye className="w-4 h-4"/>
                </button>

                <button className="overlay-btn">
                  <Heart className="w-4 h-4"/>
                </button>

              </div>

              {book.stockQuantity < 10 && (
                <span className="stock-badge">
                  Only {book.stockQuantity} left
                </span>
              )}

              <span className="book-genre-tag">
                {book.genre}
              </span>

            </div>

            <div className="book-card-body">

              <div className="book-rating">

                {renderStars(book.rating)}

                <span className="rating-num">
                  {book.rating}
                </span>

              </div>

              <h3 className="book-title">
                {book.title}
              </h3>

              <p className="book-author">
                by {book.author}
              </p>

              <p
                className={`book-description ${
                  hoveredBook === book.id ? "show" : ""
                }`}
              >
                {book.description}
              </p>

              <div className="book-card-footer">

                <span className="book-price">
                  ${book.price.toFixed(2)}
                </span>

                <button className="add-to-cart-btn">

                  <ShoppingCart className="w-4 h-4" />

                  <span>Add</span>

                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

      {filteredBooks.length === 0 && (

        <div className="no-results">

          <BookOpen className="w-12 h-12 no-results-icon"/>

          <p>No books found matching your search.</p>

          <button
            className="clear-btn"
            onClick={()=>{

              setSearchTerm("");
              setSelectedGenre("All");

            }}
          >
            Clear Filters
          </button>

        </div>

      )}

    </div>
  );

};

export default Books;