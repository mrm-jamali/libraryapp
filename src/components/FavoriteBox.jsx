import React from 'react'
import { useState } from 'react'
import styles from "./Favorite.module.css"

function FavoriteBox({data}) {
    console.log(data)
      // const {id,image,title}=favorites;

  return (
    <div className={styles.cards}>
     
    
        <img src={data.image} alt={data.title}/>
        <p>{data.title}</p>
       

     
    
    </div>
  )
}

export default FavoriteBox
