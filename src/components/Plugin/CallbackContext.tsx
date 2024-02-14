import { CurrencyAmount, Token } from '@uniswap/sdk-core'
import { Slippage } from 'hooks/useSlippage'
import { createContext } from 'react'
import { InterfaceTrade, TradeState } from 'state/routing/types'

export type OnConfirmSwap = (event: {
  slippage: Slippage
  // trade: {
  //   state: TradeState
  //   trade?: InterfaceTrade
  // },
  trade: InterfaceTrade
  gasUseEstimateUSD: CurrencyAmount<Token>
}) => { interrupt?: boolean }

export interface InjectedCallbackContextProps {
  onConfirmSwap?: OnConfirmSwap
}

export const InjectedCallbackContext = createContext<InjectedCallbackContextProps>({})
