import { ShoppingCart } from '@phosphor-icons/react'
import { CartContainer } from './style'
import { Link } from 'react-router-dom'

interface CartProps {
  backgroudCart: 'yellow' | 'purple'
  fontColorCart: 'yellow' | 'white'
}

export function Cart({ backgroudCart, fontColorCart }: CartProps) {
  return (
    <Link to="/checkout">
      <CartContainer backgroud={backgroudCart} color={fontColorCart}>
        <ShoppingCart size={22} weight="fill" />
      </CartContainer>
    </Link>
  )
}
