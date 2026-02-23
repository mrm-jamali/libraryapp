import React, { useState } from "react";
import styles from "./CardBook.module.css";
import { AiFillHeart } from "react-icons/ai";

function CardBook({ data, handleLikedlist }) {
  const { author, country, image, language, pages, title } = data;
  const [like, setLike] = useState(false);

  const likeHandler = () => {
    handleLikedlist(data, like);
    console.log(data, like);

    setLike((like) => !like);
  };
  return (
    <div className={styles.cards}>
      <img src={image} />

      <div className={styles.info}>
        <p>{title}</p>
        <p>{author}</p>
        <div>
          <span>{country}</span>
          <span>{pages}</span>
          <span>{language}</span>
        </div>
      </div>
      <button onClick={likeHandler}>
        <AiFillHeart color={like ? "red" : "white"} fontSize="1.4rem" />
      </button>
    </div>
  );
}

export default CardBook;
