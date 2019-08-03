import React, { useContext } from 'react'
import { PortfolioContext } from "../../context/PortfolioContext";
import styles from './DrawerToggle.module.css'


const DrawerToggle = () => {
  const {show, setShow} = useContext(PortfolioContext)

  const handleClick = () =>{
    setShow(!show)
  }

  return(
    <div className={styles.DrawerToggle} onClick={handleClick}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default DrawerToggle