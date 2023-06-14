import { Header } from '../../components/Header'
import {
  Banner,
  HighLight,
  HighLightContainer,
  HomeContainer,
  Intro,
  Title,
} from './style'
import CoffeeBanner from '../../assets/coffee-banner.png'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Intro>
        <Title>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </Title>
        <HighLightContainer>
          <ul>
            <HighLight highLightColor="yellowDark">
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              Compra simples e segura
            </HighLight>
            <HighLight highLightColor="gray">
              <div>
                <Package size={16} weight="fill" />
              </div>
              Embalagem mantém o café intacto
            </HighLight>
            <HighLight highLightColor="yellow">
              <div>
                <Timer size={16} weight="fill" />
              </div>
              Entrega rápida e rastreada
            </HighLight>
            <HighLight highLightColor="purple">
              <div>
                <Coffee size={16} weight="fill" />
              </div>
              O café chega fresquinho até você
            </HighLight>
          </ul>
        </HighLightContainer>
        <Banner>
          <img
            src={CoffeeBanner}
            alt="Imagem de um copo de café, com grãos de café ao fundo."
          />
        </Banner>
      </Intro>
    </HomeContainer>
  )
}
