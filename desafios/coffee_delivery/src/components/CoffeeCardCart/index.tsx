import coffeeImg from '../../assets/coffees/Americano.png'

import {
  Buy,
  BuyOption,
  Coffe,
  CoffeeCardContainer,
  Counter,
  Name,
  Price,
  ProductContainer,
  RemoveCoffe,
} from './style'
import { Minus, Plus, Trash } from '@phosphor-icons/react'

export function CoffeeCardCart() {
  return (
    <CoffeeCardContainer>
      <Coffe>
        <img src={coffeeImg} alt="" />
      </Coffe>
      <ProductContainer>
        <Buy>
          <Name>Expresso Tradicional</Name>
          <BuyOption>
            <Counter>
              <Minus size={14} weight="bold" />
              <span>1</span>
              <Plus size={14} weight="bold" />
            </Counter>
            <RemoveCoffe>
              <Trash size={16} />
              <span>Remover</span>
            </RemoveCoffe>
          </BuyOption>
        </Buy>
      </ProductContainer>
      <Price>
        R$<span>19,90</span>
      </Price>
    </CoffeeCardContainer>
  )
}
