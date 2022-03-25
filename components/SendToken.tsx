import { useState, useEffect, MouseEvent } from "react";
import {  Coin } from "@cosmjs/amino";
import { useSigningClient } from "../context/cosmwasm";
import { 
    convertMicroDenomToDenom, 
    convertFromMicroDenom, 
    convertDenomToMicroDenom } from "../util/conversion";

import styled from "styled-components";
import  styles  from '../styles/SwapBtn.module.css'; 

const PUBLIC_CHAIN_NAME = process.env.NEXT_PUBLIC_CHAIN_NAME || 'uni-2'
const PUBLIC_STAKING_DENOM = process.env.NEXT_PUBLIC_STAKING_DENOM || 'ujuno'

/* 

Contract function sending testnet token to a recipient address. Appends the
state to dom as well as the transactions information.

*/ 


export function SendToken() {
    const { walletAddress, signingClient } = useSigningClient()
    const [balance, setBalance] = useState('')
    const [loadedAt, setLoadedAt] = useState(new Date())
    const [loading, setLoading] = useState(false)
    const [recipientAddress, setRecipientAddress] = useState('')
    const [sendAmount, setSendAmount] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
  
    useEffect(() => {
      if (!signingClient || walletAddress.length === 0) {
        return
      }
      loading
      setError('')
      setSuccess('')
  
      signingClient
        .getBalance(walletAddress, PUBLIC_STAKING_DENOM)
        .then((response: any) => {
          const { amount, denom }: { amount: number; denom: string } = response
          console.log(response)
          setBalance(
            `${convertMicroDenomToDenom(amount)} ${convertFromMicroDenom(denom)}`
          )
        })
        .catch((error) => {
          setError(`Error! ${error.message}`)
          console.log('Error signingClient.getBalance(): ', error)
        })
        
    }, [signingClient, walletAddress, loadedAt])
  
    const handleSubmit = (event: MouseEvent<HTMLElement>) => {
      event.preventDefault()
      setError('')
      setSuccess('')
      setLoading(true)
 
      const amount: Coin[] = [
        {
          amount: convertDenomToMicroDenom(sendAmount),
          denom: PUBLIC_STAKING_DENOM,
        },
      ]
      const StdFee = {
          amount: [{
            amount: convertDenomToMicroDenom(sendAmount),
            denom: PUBLIC_STAKING_DENOM,
          }, ],
          gas: '500000'

          
      }
      console.log(amount)
  
      signingClient
        ?.sendTokens(walletAddress, recipientAddress, amount, StdFee )
        .then((resp) => {
          console.log('resp', resp)
  
          const message = `Success! Sent ${sendAmount}  ${convertFromMicroDenom(
            PUBLIC_STAKING_DENOM
          )} to ${recipientAddress}.`
  
          setLoadedAt(new Date())
          setLoading(false)
          setSendAmount('')
          setSuccess(message)
        })
        .catch((error) => {
          setLoading(false)
          setError(`Error! ${error.message}`)
          console.log('Error signingClient.sendTokens(): ', error)

          
          console.log(PUBLIC_CHAIN_NAME)
          console.log(PUBLIC_STAKING_DENOM)
        })
    }
    return (
        <>
        <StyledCardOutter>
            {/* Card------------------ */}
            <StyledCardWrapper>
              {/* Inputs ------------- */}
            <StyledWrapper>
            <input
                type="text"
                lang="en-US"
                id="recipient-address"
                placeholder={`${PUBLIC_CHAIN_NAME} recipient wallet address...`}
                onChange={(event) => setRecipientAddress(event.target.value)}
                value={recipientAddress}
                autoComplete="on"
                style={{ width: '100%', 
                         padding: '2rem', 
                         backgroundColor: '#010f36',
                         color: '#f4fc03',
                         borderStyle: 'none',
                         }}
            />
            </StyledWrapper>

            <StyledWrapper> 
              <input
              type="number"
              lang="en-US"
              id="send-amount"
              placeholder="Amount"
              step="0.1"
              onChange={(event) => setSendAmount(event.target.value)}
              value={sendAmount}
              style={{ width: '100%', 
                       padding: '2rem',
                       backgroundColor: '#010f36',
                       color: '#f4fc03',
                       borderStyle: 'none', 
                      }}
              />
            </StyledWrapper>
            </StyledCardWrapper>
             {/* Button--------------------- */}
            <StyledBtnWrapper>
                <a className={styles.a} onClick={handleSubmit} >
                <span className={styles.span}></span>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
                SEND
                </a>
              </StyledBtnWrapper>  

            <StyledTextWrapper>
        </StyledTextWrapper>
        </StyledCardOutter>

        </>
    )
}

const StyledCardWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    margin-bottom: 5rem;
    padding: 2rem;
    padding-bottom: 12rem;
    width: 38rem;
    border-radius: 10px;
    background-color: #7303fc;
    opacity: .8;
    @media only screen and (max-width: 686px) {
      display: flex;
      flex-direction: column;
      width: 26rem; 
    }
    @media only screen and (max-width: 500px) {
      display: flex;
      flex-direction: column;
      width: 22rem; 
    }
`;
const StyledCardOutter = styled.div`
    position: relative;
    margin: 0 auto;
    margin-top: 6rem;
    margin-bottom: 4rem;
    padding: 1rem;
    padding-bottom: 4rem;
    width: 40rem;
    border-radius: 10px;
    background-color: #000000;
    opacity: .8;
    box-shadow: 0 0 2px #f4fc03, 
                0 0 10px #f4fc03,
                0 0 20px #f4fc03;
   @media only screen and (max-width: 686px) {
     display: flex;
     flex-direction: column;
     width: 30rem;            
    }
    @media only screen and (max-width: 500px) {
      display: flex;
      flex-direction: column;
      width: 24rem;            
     }
`;

const StyledWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 2rem;
  @media only screen and (max-width: 686px) {
    display: flex;
    justify-content: space-between;
    width: 24rem;
  }
  @media only screen and (max-width: 500px) {
    display: flex;
    justify-content: space-between;
    width: 20rem;
  }
`;

const StyledBtnWrapper = styled.div`
    position: relative;
    padding: .5rem;
    width: 100%;
`;

const StyledTextWrapper = styled.div`
color: #ffffff;
`;