import { ShoppingCart } from '@phosphor-icons/react'
import { CartContainer } from './style'

export function Cart() {
  return (
    <CartContainer>
      <ShoppingCart size={22} weight="fill" />
    </CartContainer>
  )
}
