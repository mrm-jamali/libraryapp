import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchBox.module.css"

function SearchBox({search,setSearch,SearchHandler}) {


  const changeHandler = (e) => {
   
  setSearch(e.target.value.toLowerCase());


  };



  return (
    <div className={styles.search}>
      <input type="text" placeholder="Search" value={search} onChange={changeHandler} />
      <button  onClick={SearchHandler} > <FaSearch /></button>
    </div>
  );
}

export default SearchBox;
