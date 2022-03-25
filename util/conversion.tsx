export const protectAgainstNaN = (value: number) => (isNaN(value) ? 0 : value)

export function convertMicroDenomToDenom(amount: number | string) {
    if (typeof amount === 'string') {
      amount = Number(amount)
    }
    amount = amount / 1000000
    return isNaN(amount) ? 0 : amount
  }
  
  export function convertDenomToMicroDenom(amount: number | string): string {
    if (typeof amount === 'string') {
      amount = Number(amount)
    }
    amount = amount * 1000000
    return isNaN(amount) ? '0' : String(amount)
  }
  
  export function convertFromMicroDenom(denom: string) {
    return denom?.substring(1).toUpperCase()
  }
  
  export function convertToFixedDecimals(amount: number | string): string {
    if (typeof amount === 'string') {
      amount = Number(amount)
    }
    if (amount > 0.01) {
      return amount.toFixed(2)
    } else return String(amount)
  }
  
  export const zeroVotingCoin = {
    amount: '0',
    denom: 'ucredits',
  }
  
  export const zeroStakingCoin = {
    amount: '0',
    denom: process.env.NEXT_PUBLIC_STAKING_DENOM || 'ujuno',
  }

  export const formatTokenName = (name: string) => {
    if (name) {
      return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()
    }
    return ''
  }

  export const createBalanceFormatter = ({
    maximumFractionDigits = 6,
    ...options
  }: Omit<
    Parameters<typeof Intl.NumberFormat>[1],
    'style' | 'currency'
  > = {}) => {
    const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits,
      ...options,
      style: 'currency',
      currency: 'USD',
    })
  
    return (
      value: string | number,
      { includeCommaSeparation = false, applyNumberConversion = true } = {}
    ) => {
      const formattedValue = formatter.format(value as number).replace(/\$/g, '')
  
      if (includeCommaSeparation) {
        return formattedValue
      }
  
      const rawValue = formattedValue.replace(/\,/g, '')
      if (applyNumberConversion) {
        return Number(rawValue)
      }
  
      return rawValue
    }
  }
  
  export const formatTokenBalance = createBalanceFormatter()
  
  export const dollarValueFormatterWithDecimals = createBalanceFormatter({
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })
  
  export const dollarValueFormatter = createBalanceFormatter({
    maximumFractionDigits: 2,
  })