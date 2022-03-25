import  SwapSelector  from "../components/SwapSelector";
import { SwapButton } from "../components/Animated/SwapButton";

import styled from "styled-components";



// SawpPage

export default function SwapPage() {
    return (
        <StyledContainer>
            <StyledCardOutter >
                <StyledCardWrapper>
                    <SwapSelector />
                </StyledCardWrapper>

                <StyledBtnWrapper>
                        <SwapButton />
                </StyledBtnWrapper>
            </StyledCardOutter>
        </StyledContainer>
   
    )
};

const StyledContainer = styled.div`
    height: 100%;
    width: 100%;
    margin: 1rem;
    padding: 1rem;
 
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
    box-shadow: 0 0 2px '#ff0000', 
                0 0 4px '#ff0000',
                0 0 8px '#ff0000';
    @media only screen and (max-width: 686px) {
        display: flex;
        flex-direction: column;
        width: 26rem;
    }
    @media only screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
        width: 20rem;
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
    box-shadow: 0 0 .8px #f4fc03, 
                0 0 1px #f4fc03,
                0 0 10px #f4fc03;
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

const StyledBtnWrapper = styled.div`
    position: relative;
    padding: .5rem;
    width: 100%;

`;