import { Window as KeplrWindow } from '@keplr-wallet/types'

// globally connect keplr

declare global {
  // eslint-disable-next-line
  interface Window extends KeplrWindow {}
}