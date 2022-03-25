import styled from "styled-components";

/*

Inputs for SwapPage

 */ 

export default function SwapSelector() {
  return (
    <>
      <StyledWrapper>
        <input
            type="text"
            lang="en-US"
            placeholder="Search name or symbol"
            autoComplete="off"
            style={{ width: '100%', 
                     padding: '2rem', 
                     backgroundColor: '#474242',
                     color: '#f4fc03',
                     borderStyle: 'none',
                     }}
        />
        </StyledWrapper>

        <StyledWrapper> 
          <input
          type="text"
          lang="en-US"
          placeholder="Search name or symbol"
          autoComplete="off"
          style={{ width: '100%', 
                   padding: '2rem',
                   backgroundColor: '#474242',
                   color: '#f4fc03',
                   borderStyle: 'none', 
                  }}
          />
        </StyledWrapper>
    </>
  )
};
        
const StyledWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 2rem;
  
`;

