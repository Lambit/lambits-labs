import React from 'react'
import { useSigningClient } from "../../context/cosmwasm";
import { MouseEvent } from "react";

import styles from '../../styles/ConnWallBtn.module.css';

/* Displayed on index.tsx animated button that connects keplr wallet
to app.
*/ 

export function ConnectWalletButton() {
    const { walletAddress, connectWallet, disconnect } = useSigningClient();
    const handleConnect = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()
        if (walletAddress.length === 0) {
            connectWallet()

        } else {
            disconnect();
        }
    }


    return (
        <a className={styles.a} href='/' onClick={handleConnect}>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
        {walletAddress || 'Connect Wallet'}
        </a>
    )
}

