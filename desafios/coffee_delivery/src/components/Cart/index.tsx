import { ShoppingCart } from '@phosphor-icons/react'
import { CartContainer } from './style'

interface CartProps {
  backgroudColor: 'yellow' | 'purple'
  fontColor: 'yellow' | 'white'
}

export function Cart({ backgroudColor, fontColor }: CartProps) {
  return (
    <CartContainer backgroudColor={backgroudColor} fontColor={fontColor}>
      <ShoppingCart size={22} weight="fill" />
    </CartContainer>
  )
}
