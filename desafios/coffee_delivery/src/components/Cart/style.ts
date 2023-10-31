import { styled } from 'styled-components'

const CART_BG_COLOR = {
  yellow: 'yellow-light',
  purple: 'purple-dark',
} as const

const CART_FONT_COLOR = {
  yellow: 'yellow-dark',
  white: 'white',
} as const

interface CartColorProps {
  backgroud: keyof typeof CART_BG_COLOR
  color: keyof typeof CART_FONT_COLOR
}

export const CartContainer = styled.div<CartColorProps>`
  background-color: ${(props) =>
    props.theme.color[CART_BG_COLOR[props.backgroud]]};
  border-radius: 6px;
  height: 2.375rem;
  width: 2.375rem;

  display: grid;
  place-items: center;

  cursor: pointer;
  color: ${(props) => props.theme.color[CART_FONT_COLOR[props.color]]};
  transition: 500ms opacity;

  &:hover {
    opacity: 0.8;
  }
`
