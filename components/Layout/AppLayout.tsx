import { NavigationHeader } from "./NavigationHeader";
import { FooterLayout } from "./FooterLayout";
import { HeadTitle } from "./HeadTitle";
import { ReactNode } from "react";

import styled from "styled-components";

/* Layout for app for global styles, Head, and Navbar */ 

export default function AppLayout({ children }: { children: ReactNode }) {
    return (
        <StyledWrapper>
            <HeadTitle />
                <NavigationHeader />
                    <StyledContainer>
                        {children}
                    </StyledContainer>
            <FooterLayout />
    </StyledWrapper>
    ) 
};

const StyledWrapper = styled.div`
    text-align: center;
    height: 100%;
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
    margin: 0 auto;
`;

const StyledContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0 auto;
    width: 100%;
    
`;