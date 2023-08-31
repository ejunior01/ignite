import { Price } from './style'

interface ProductPriceProps {
  price: number
}

export function ProductPrice({ price }: ProductPriceProps) {
  return (
    <Price>
      <span>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
        }).format(price)}
      </span>
    </Price>
  )
}
