import { ReactNode } from "react";
import { useSigningClient } from "../../context/cosmwasm";
import { ConnectWalletButton } from "../Animated/ConnectWalletButton";

import styled from "styled-components";

/* WalletLoader- no wallet connect display ConnectWalletButton, else 
display card with greeting.
*/ 

function WalletLoader({
    children,
    loading = false,
  }: {
    children: ReactNode
    loading?: boolean
  }) {
    const {
      walletAddress,
      loading: clientLoading,
      error,
      connectWallet,
    } = useSigningClient();
  
    if (loading || clientLoading) {
      return (
        <div className="flex justify-center">
          Loading...
        </div>
      )
    }
  
    if (walletAddress === '') {
      return (
        <StyledWrapperBtn>
        <ConnectWalletButton />
      </StyledWrapperBtn>
      )
    }
  
    if (error) {
      return <code>{JSON.stringify(error)}</code>
    }
  
    return <>{children}</>
  }
  
  export default WalletLoader
  const StyledWrapperBtn = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 10rem;
  padding: 1rem;
  width: 100%; 
`;