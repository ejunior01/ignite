import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import {
  AddressContainer,
  BaseInput,
  CheckoutForm,
  CoffeListCart,
  DescriptionAddress,
  DescriptionPayment,
  InputContainer,
  PaymentContainer,
  PaymentOption,
  PaymentOptionList,
  PreCheckout,
  PriceBox,
  PriceBoxContainer,
  PriceDescription,
  PriceTotal,
} from './style'
import { CoffeeCardCart } from '../../components/CoffeeCardCart'

export function Checkout() {
  return (
    <CheckoutForm>
      <section>
        <h2>Complete seu pedido</h2>
        <AddressContainer>
          <DescriptionAddress>
            <strong>
              <MapPinLine size={22} />
              Endereço de Entrega
            </strong>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </DescriptionAddress>
          <InputContainer>
            <BaseInput
              type="text"
              id="zipcode"
              name="zipcode"
              placeholder="CEP"
            />
            <BaseInput
              type="text"
              id="street"
              name="street"
              placeholder="Rua"
            />
            <BaseInput
              type="text"
              id="number"
              name="number"
              placeholder="Número"
            />
            <BaseInput
              type="text"
              id="adjunct"
              name="adjunct"
              placeholder="Complemento"
            />
            <BaseInput
              type="text"
              id="district"
              name="district"
              placeholder="Bairro"
            />

            <BaseInput type="text" id="city" name="city" placeholder="Cidade" />
            <BaseInput type="text" id="uf" name="uf" placeholder="UF" />
          </InputContainer>
        </AddressContainer>
        <PaymentContainer>
          <DescriptionPayment>
            <strong>
              <CurrencyDollar size={22} />
              Pagamento
            </strong>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </DescriptionPayment>
          <PaymentOptionList>
            <PaymentOption>
              <CreditCard size={16} />
              Cartão de crédito
            </PaymentOption>
            <PaymentOption>
              <Bank size={16} />
              cartão de débito
            </PaymentOption>
            <PaymentOption>
              <Money size={16} />
              dinheiro
            </PaymentOption>
          </PaymentOptionList>
        </PaymentContainer>
      </section>
      <section>
        <h2>Cafés selecionados</h2>

        <PreCheckout>
          <CoffeListCart>
            <CoffeeCardCart />
            <CoffeeCardCart />
          </CoffeListCart>
          <PriceBoxContainer>
            <PriceBox>
              <PriceDescription>Total de itens</PriceDescription>
              <PriceTotal>R$ 29,70</PriceTotal>
            </PriceBox>
            <PriceBox>
              <PriceDescription>Entrega</PriceDescription>
              <PriceTotal>R$ 3,50</PriceTotal>
            </PriceBox>
            <PriceBox>
              <PriceDescription>Total</PriceDescription>
              <PriceTotal>R$ 33,20</PriceTotal>
            </PriceBox>
          </PriceBoxContainer>
          <button>confirmar pedido</button>
        </PreCheckout>
      </section>
    </CheckoutForm>
  )
}
