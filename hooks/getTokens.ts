import { useQuery } from 'react-query';
import { queryClient } from '../context/queryClient';

/* 
 
Took this from JunoSwap in attemps to seed Account Balances.
However the launchpad method I was using is dated. Time to 
plan and refactor

*/ 

export type TokenInfo = {
  id: string
  pool_id: string
  chain_id: string
  token_address: string
  swap_address: string
  symbol: string
  name: string
  decimals: number
  logoURI: string
  tags: string[]
  denom: string
  native: boolean
}

export type TokenList = {
  name: string
  logoURI: string
  keywords: Array<string>
  timestamp: string
  base_token: TokenInfo
  tokens: Array<TokenInfo>
  tags: Record<
    string,
    {
      name: string
      description: string
    }
  >

  version: {
    major: number
    minor: number
    patch: number
  }
}


export const getCachedTokenList = () =>
  queryClient.getQueryCache().find('@token-list')?.state?.data as
    | TokenList
    | undefined

export const useTokenList = () => {
  const { data, isLoading } = useQuery<TokenList>(
    '@token-list',
    async () => {
      const response = await fetch('https://github.com/CosmosContracts/junoswap-asset-list/blob/main/token_list.json')
      
      console.log(response)
      return await response.json()
    },
    {
      onError(e) {
        console.error('Error loading token list:', e)
      },
      refetchOnMount: false,
      refetchIntervalInBackground: true,
      refetchInterval: 1000 * 60,
    }
  )
 
    
  JSON.stringify(data)
    console.log(data)
    
  return [data, isLoading] as const
}