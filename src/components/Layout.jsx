import React from 'react'
import styles from "./Layout.module.css"

function Layout({children}) {
  return (
    <div>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p><a href="#"></a>React JS|State Managment</p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed By Maryam Jamali</p>
      </footer>
    </div>
  )
}

export default Layout
