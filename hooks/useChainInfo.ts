import { useQuery } from "react-query";
import { ChainInfo } from "@keplr-wallet/types";
import { queryClient } from "../context/queryClient";

const chainInfoQueryKey = '@chain-info'


/* 

Same as getTokens.ts taken from Junoswap in attemps to seed account.


*/ 


export const unsafelyReadChainInfoCache = () =>
  queryClient.getQueryCache().find(chainInfoQueryKey)?.state?.data as
    | ChainInfo
    | undefined

    

export const useChainInfo = () => {
  const { data, isLoading } = useQuery<ChainInfo>(
    chainInfoQueryKey,
    async () => {
      const response = await fetch('https://raw.githubusercontent.com/Wasmswap/asset-list-example/main/chain_info.json')
      console.log(response)
      return await response.json()
      
    },
    
    {
      
      onError(e) {
        console.error('Error loading chain info:', e)
      },
      
    }
  )
  console.log(data)
  return [data, isLoading] as const 
}
