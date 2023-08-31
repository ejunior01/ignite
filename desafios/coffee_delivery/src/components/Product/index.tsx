import { Cart } from '../Cart'
import productImg from '../../assets/coffees/Americano.png'
import { Buy, ProductContainer, Tag, Tags } from './style'
import { ProductImage } from './ProductImage'
import { ProductCounter } from './ProductCounter'
import { ProductPrice } from './ProductPrice'

export function Product() {
  return (
    <ProductContainer>
      <ProductImage src={productImg} alt="" />
      <Tags>
        <Tag>Tradicional</Tag>
      </Tags>
      <h2>Expresso Tradicional</h2>
      <p>Bebida preparada com café expresso e cubos de gelo</p>
      <Buy>
        <ProductPrice price={9.9} />
        <ProductCounter total={0} />
        <Cart backgroudCart="purple" fontColorCart="white" />
      </Buy>
    </ProductContainer>
  )
}
