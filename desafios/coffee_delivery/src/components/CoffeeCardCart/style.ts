import { styled } from 'styled-components'

export const CoffeeCardContainer = styled.div`
  padding: 0.5rem 0.25rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid ${(props) => props.theme.color['base-button']};
  column-gap: 1rem;
`

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Name = styled.h2`
  font: ${(props) => props.theme.font.TextMRegular};
  color: ${(props) => props.theme.color['base-subtitle']};
  margin-top: 0;
  margin-bottom: 0.5rem;
`
export const Buy = styled.div`
  display: flex;
  flex-direction: column;
`
export const BuyOption = styled.div`
  display: flex;
  column-gap: 0.5rem;
`

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.25rem;

  font: ${(props) => props.theme.font.TextMBold};
  color: ${(props) => props.theme.color['base-text']};
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.6rem;

  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.color['base-button']};

  font: ${(props) => props.theme.font.TextMRegular};
  color: ${(props) => props.theme.color.purple};

  span {
    color: ${(props) => props.theme.color['base-title']};
  }

  svg {
    cursor: pointer;
  }

  svg:hover {
    color: ${(props) => props.theme.color['purple-dark']};
  }
`

export const Coffe = styled.div`
  img {
    max-width: 100%;
    height: auto;
    min-width: 5rem;
  }
`

export const RemoveCoffe = styled.div`
  display: flex;
  column-gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.color['base-button']};

  span {
    text-transform: uppercase;
    font: ${(props) => props.theme.font.ButtonM};
    color: ${(props) => props.theme.color['base-text']};
  }
  svg {
    color: ${(props) => props.theme.color.purple};
  }
`
