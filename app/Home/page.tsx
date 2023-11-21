import React from 'react'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.innerContainer}`}>
        <h1 className={`${styles.title}`}>I am Zeeshan Malik</h1>
        <div className={`${styles.heroSubTitle}`}>Web/App Developer</div>
      </div>
    </div>
  )
}

export default Home