import { SendToken } from '../components/SendToken';
import styled from "styled-components";

// Send page hodls the SendToken function component.

function Send() {
    return (
      <StyledContainer>
            <SendToken/>
      </StyledContainer>
    )
  }
  export default Send;


  

  const StyledContainer = styled.div`
    height: 100%;
    width: 100%;
    margin: 1rem;
    padding: 1rem;
 
`;


