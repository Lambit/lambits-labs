import { useState } from "react";
import { connectKeplr } from "../service/keplr";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
// import { Account } from "@cosmjs/launchpad";
// import { useSdk } from "@cosmicdapp/logic"; 
// import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
// import { BankExtension } from "@cosmjs/stargate";



// export interface to be placed in a Context Provider, to distribute
export interface ISigningCosmWasmClientContext {
    walletAddress: string
    signingClient: SigningCosmWasmClient | null
    loading: boolean
    error: any
    connectWallet: any
    disconnect: Function
  }

  const PUBLIC_RPC_ENDPOINT = process.env.NEXT_PUBLIC_CHAIN_RPC_ENDPOINT || ''
  const PUBLIC_CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID
  
  export const useSigningCosmWasmClient = (): ISigningCosmWasmClientContext => {
    const [walletAddress, setWalletAddress] = useState('')
    const [signingClient, setSigningClient] =
      useState<SigningCosmWasmClient | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
  

    /* Connect to keplr and create an offsigner client for testnet. 
    This is done through comswasm-launchpad which is out dated. 
    Set wallets state.
    */ 
    const connectWallet = async () => {
      setLoading(true)
  
      try {
        await connectKeplr()
  
        // enable website to access kepler
        await (window as any).keplr.enable(PUBLIC_CHAIN_ID) 
        
        
        // get offline signer for signing txs
        const offlineSigner = await (window as any).getOfflineSigner(
          PUBLIC_CHAIN_ID
        )
  
        // make client
        const client = await SigningCosmWasmClient.connectWithSigner(
          PUBLIC_RPC_ENDPOINT,
          offlineSigner
        )
        setSigningClient(client)

            // get user address
        const [{ address }] = await offlineSigner.getAccounts()
        setWalletAddress(address)
        
  
        setLoading(false)
      } catch (error) {
        
      }
      setError(error)
    }
  
    const disconnect = () => {
      if (signingClient) {
        signingClient.disconnect()
      }
      setWalletAddress('')
      setSigningClient(null)
      setLoading(false)
    }
  
    return {
      walletAddress,
      signingClient,
      loading,
      error,
      connectWallet,
      disconnect,
    }
  }