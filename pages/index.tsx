import React from 'react';
import styled from 'styled-components';
import WalletLoader from 'components/Layout/WalletLoader';
import { LambitsLabsNeon } from "../components/Animated/LambitsLabsNeonSign";

/* 

Show connect button if no wallet is connected. Display card if
connected.

*/  
 const SITE_TITLE =  process.env.NEXT_PUBLIC_SITE_TITLE
const SITE_ICON_URL = process.env.TOKEN_LIST_URL

export const Home = () => {
  return (
    <>
      <WalletLoader> 
      <StyledCardOutter>
          <StyledCardWrapper>
            {SITE_TITLE}
            {SITE_ICON_URL}
          </StyledCardWrapper>
        </StyledCardOutter>
        </WalletLoader> 

          <StyledWrapper>
          <LambitsLabsNeon />
          </StyledWrapper>   
    </>
  )
}
export default Home;

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 3rem;
  margin: 0 auto;
  padding: 0 1rem 0 1rem;
  width: 100%;
`;

const StyledCardWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    margin-bottom: 5rem;
    padding: 2rem;
    padding-bottom: 12rem;
    width: 38rem;
    border-radius: 10px;
    background-color: #7303fc;
    color: #f4fc03;
    opacity: .8;
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
    box-shadow: 0 0 .8px #f4fc03, 
                0 0 1px #f4fc03,
                0 0 10px #f4fc03;
 
`;



