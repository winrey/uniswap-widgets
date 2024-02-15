import { CurrencyAmount, Token } from '@uniswap/sdk-core'
import { Slippage } from 'hooks/useSlippage'
import { createContext } from 'react'
import { InterfaceTrade } from 'state/routing/types'

export type IInterruptable = { interrupt?: boolean }

export type OnConfirmSwap = (event: {
  slippage: Slippage
  // trade: {
  //   state: TradeState
  //   trade?: InterfaceTrade
  // },
  trade?: InterfaceTrade
  gasUseEstimateUSD?: CurrencyAmount<Token>
}) => IInterruptable

export type OnReviewSwap = () => IInterruptable | Promise<IInterruptable>

export interface InjectedCallbackContextProps {
  onConfirmSwap?: OnConfirmSwap
  onReviewSwap?: OnReviewSwap
}

export const InjectedCallbackContext = createContext<InjectedCallbackContextProps>({})
