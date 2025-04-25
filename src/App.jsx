import { useState } from 'react'
import Logo from './assets/images/logo.svg'
import styles from './styles/App.module.css'

function App() {

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src={Logo} alt="Logo" />
        </div>
      </header>
      <main className={styles.main}>

      </main>
    </div>
  )
}

export default App
