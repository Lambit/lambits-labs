import styled from "styled-components";

// Global Footer

export const FooterLayout = () => {
    return (
        <StyledFooter>
            Lambit's Labs &copy; 2022 - Earn, Borrow, Reward.
        </StyledFooter>
    )
};

const StyledFooter = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 1rem;
    color: #474242;
    z-index: 99;
`;