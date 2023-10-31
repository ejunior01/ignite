import { Trash } from '@phosphor-icons/react'
import { ProductActionContainer } from './style'

export function ProductRemove() {
  return (
    <ProductActionContainer>
      <Trash size={16} />
      <strong>REMOVER</strong>
    </ProductActionContainer>
  )
}
