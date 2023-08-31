import styled from 'styled-components'

export const CheckoutForm = styled.form`
  display: grid;
  grid-template-columns: 60% 1fr;
  column-gap: 2rem;
  margin-bottom: 10rem;

  @media only screen and (max-device-width: 425px) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
`

export const DescriptionBase = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.color['base-subtitle']};
  font: ${(props) => props.theme.font.TextMRegular};

  strong {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }

  p {
    color: ${(props) => props.theme.color['base-subtitle']};
    font: ${(props) => props.theme.font.TextS};
    margin-left: 1.875rem;
  }
`

export const DescriptionAddress = styled(DescriptionBase)`
  strong svg {
    color: ${(props) => props.theme.color['yellow-dark']};
  }
`
export const DescriptionPayment = styled(DescriptionBase)`
  strong svg {
    color: ${(props) => props.theme.color['purple-dark']};
  }
`
export const BaseContainer = styled.div`
  background-color: ${(props) => props.theme.color['base-card']};
  border-radius: 6px;
  border: 0;
  padding: 2.5rem;
  margin-top: 0.9375rem;
`

export const AddressContainer = styled(BaseContainer)``
export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 1fr 15%;
  grid-template-rows: repeat(4, 1fr);
  gap: 1rem 0.75rem;
  margin-top: 2rem;
  border: 0;
`
export const BaseInput = styled.input`
  padding: 0.75rem;

  font: ${(props) => props.theme.font.TextS};

  background-color: ${(props) => props.theme.color['base-input']};

  color: ${(props) => props.theme.color['base-text']};

  border: 1px solid ${(props) => props.theme.color['base-button']};
  border-radius: 4px;

  outline-color: ${(props) => props.theme.color['yellow-dark']};

  &::placeholder {
    color: ${(props) => props.theme.color['base-label']};
  }

  &:first-child {
    grid-area: 1 / 1 / 2 / 2;
  }

  &:nth-child(2) {
    grid-area: 2 / 1 / 3 / 4;
  }

  &:nth-child(3) {
    grid-area: 3 / 1 / 4 / 2;
  }

  &:nth-child(4) {
    grid-area: 3 / 2 / 4 / 4;
  }

  &:nth-child(5) {
    grid-area: 4 / 1 / 5 / 2;
  }

  &:nth-child(6) {
    grid-area: 4 / 2 / 5 / 3;
  }

  &:last-child {
    grid-area: 4 / 3 / 5 / 4;
  }
`
export const PaymentContainer = styled(BaseContainer)`
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`

export const PaymentOptionList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.75rem;
`

export const PaymentOption = styled.span`
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
  padding: 0.9rem;
  background-color: ${(props) => props.theme.color['base-button']};
  color: ${(props) => props.theme.color['base-text']};
  font: ${(props) => props.theme.font.ButtonM};
  border-radius: 6px;
  text-transform: uppercase;

  transition: 500ms background-color;
  border: 1px solid transparent;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color['base-hover']};
    color: ${(props) => props.theme.color['base-title']};
  }

  &.selected {
    border-color: ${(props) => props.theme.color.purple};
    background-color: ${(props) => props.theme.color['purple-light']};
  }

  svg {
    color: ${(props) => props.theme.color.purple};
  }

  @media only screen and (max-device-width: 1024px) {
    padding: 0.8rem;
  }
`

export const PreCheckout = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`

export const CoffeListCart = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`

export const PriceBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
`
export const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.color['base-text']};
`

export const PriceDescription = styled.div`
  font: ${(props) => props.theme.font.TextMRegular};
`

export const PriceTotal = styled.div`
  font: ${(props) => props.theme.font.TextLRegular};
`
