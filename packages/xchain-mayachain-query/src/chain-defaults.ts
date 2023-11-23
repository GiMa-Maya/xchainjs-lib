import { Chain } from '@xchainjs/xchain-util'

import { ChainAttributes } from './types'

const DefaultChainAttributes: Record<Chain, ChainAttributes> = {
  BTC: {
    blockReward: 6.25,
    avgBlockTimeInSecs: 600,
  },
  ETH: {
    blockReward: 2,
    avgBlockTimeInSecs: 13,
  },
  DASH: {
    blockReward: 2.48,
    avgBlockTimeInSecs: 150,
  },
  KUJI: {
    blockReward: 0,
    avgBlockTimeInSecs: 4,
  },
  THOR: {
    blockReward: 0,
    avgBlockTimeInSecs: 6,
  },
  MAYA: {
    blockReward: 0,
    avgBlockTimeInSecs: 6,
  },
}

export { DefaultChainAttributes }
