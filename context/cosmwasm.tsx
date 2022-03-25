import { createContext, useContext, ReactNode } from "react";
import { useSigningCosmWasmClient, ISigningCosmWasmClientContext } from "../hooks/cosmwasm";

/* Context used to sign in with an offlineSigner.
 To send wallet state throughout app. 
 */ 

let CosmWasmContext: any
let { Provider } = (CosmWasmContext =
  createContext<ISigningCosmWasmClientContext>({
    walletAddress: '',
    signingClient: null,
    loading: false,
    error: null,
    connectWallet: () => {},
    disconnect: () => {},
  }))

export const useSigningClient = (): ISigningCosmWasmClientContext =>
  useContext(CosmWasmContext)

export const SigningCosmWasmProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const value = useSigningCosmWasmClient()
  return <Provider value={value}>{children}</Provider>
}
