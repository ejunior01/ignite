import { Cart } from '../Cart'
import coffeeImg from '../../assets/coffees/Americano.png'
import {
  Buy,
  Coffe,
  CoffeeCardContainer,
  Counter,
  Description,
  Name,
  Price,
  Tag,
  Tags,
} from './style'
import { Minus, Plus } from '@phosphor-icons/react'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <Coffe>
        <img src={coffeeImg} alt="" />
      </Coffe>
      <div>
        <Tags>
          <Tag>Tradicional</Tag>
        </Tags>
        <Name>Expresso Tradicional</Name>
        <Description>
          Bebida preparada com café expresso e cubos de gelo
        </Description>
        <Buy>
          <Price>
            R$<span> 9,90</span>
          </Price>
          <Counter>
            <Minus size={14} weight="bold" />
            <span>1</span>
            <Plus size={14} weight="bold" />
          </Counter>
          <Cart backgroudCart="purple" fontColorCart="white" />
        </Buy>
      </div>
    </CoffeeCardContainer>
  )
}
