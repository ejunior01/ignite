import { Minus, Plus } from '@phosphor-icons/react'
import { ProductActionContainer } from './style'

interface ProductCounterProps {
  total: number
}

export function ProductCounter({ total }: ProductCounterProps) {
  return (
    <ProductActionContainer>
      <Minus size={14} weight="bold" />
      <span>{total}</span>
      <Plus size={14} weight="bold" />
    </ProductActionContainer>
  )
}
