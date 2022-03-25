import Link from "next/link";
import React, { useState } from "react";
import { useSigningClient } from '../../context/cosmwasm';
import { NeonLogo } from "../Animated/LogoAnimation";
import styles from '../../styles/Nav.module.css';

export default function Navbar() {
    const { walletAddress, connectWallet, disconnect, signingClient } = useSigningClient()
    // State for responsive navbar
    const [isOpen,setIsOpen] = useState(false)
    const openMenu= ()=> setIsOpen(!isOpen)
    const [isClient] =useState(signingClient)
    const handleConnect = () => {
      if (walletAddress.length === 0) {
        connectWallet(isClient)
      } else {
        disconnect()
      }
    }  
      return (
        <nav className={styles.navbar}>
            <Link href='/'>
             <a className={styles.navlogo}><NeonLogo /></a>
            </Link>
        <ul className={isOpen === false ? 
                styles.navmenu : styles.navmenu +' '+ styles.active}>
            <li className={styles.navitem}>
               <Link href='/send'>
                 <a className={isOpen === false ? 
                            styles.navlink : styles.navlink+' '+styles.active}
                            onClick={openMenu}>Send</a>
                </Link>
            </li>
            <li className={styles.navitem}>
                <Link href='/swap'>
                  <a className={isOpen === false ? 
                            styles.navlink : styles.navlink+' '+styles.active}
                            onClick={openMenu}>Swap</a>
                </Link>
            </li>
            <li className={styles.navWallet}>
                 <a className={isOpen === false ? 
                            styles.walletLink : styles.walletLink+' '+styles.active} 
                            onClick={handleConnect} >
                              {isClient ||'Connect'}
                            </a>
                
            </li>
        </ul>
        <button className={isOpen === false ? 
                            styles.hamburger : styles.hamburger+' '+styles.active}
                            onClick={openMenu}
                            >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
        </button>
        </nav>
      )
  


}