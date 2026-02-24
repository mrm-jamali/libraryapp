import { books as bookData } from "../constants/mockData";
import styles from "./Books.module.css";
import CardBook from "./CardBook";
import FavoriteBox from "./FavoriteBox";
import { useState } from "react";
import SearchBox from "./SearchBox";

function Books() {
  const [books, setBooks] = useState(bookData);
  const [favorites, setFavorite] = useState([]);
  const [search, setSearch] = useState([]);

  const handleLikedlist = (book, status) => {
    if (status) {
      console.log(status);
      const newFavoritelist = favorites.filter((i) => i.id !== book.id);
      setFavorite(newFavoritelist);
    } else {
      setFavorite((favorites) => [...favorites, book]);
      console.log(status);
    }
  };

  const SearchHandler = () => {
    if (search) {
      const searchNewList = bookData.filter((book) =>
        book.title.toLowerCase().includes(search)
      );

      setBooks(searchNewList);
    } else {
      setBooks(bookData);
    }
  };

  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        SearchHandler={SearchHandler}
      />
      <div className={styles.container}>
        <div className={styles.cards}> 
          {books.map((book) => (
            <CardBook
              data={book}
              key={book.id}
              handleLikedlist={handleLikedlist}
            />
          ))}
        </div>

    
      </div>
          {!!favorites.length && (
          <div className={styles.favorite}>
            <h4>Favorite</h4>
            {favorites.map((favorite) => (
                <FavoriteBox key={favorite.id} data={favorite} />
            ))}
          
          </div>
        )}
    </>
  );
}

export default Books;
