import { styled } from 'styled-components'

const CART_BG_COLOR = {
  yellow: 'yellow-light',
  purple: 'purple-dark',
} as const

const CART_FONT_COLOR = {
  yellow: 'yellow-dark',
  white: 'white',
} as const

interface cartColorProps {
  backgroudColor: keyof typeof CART_BG_COLOR
  fontColor: keyof typeof CART_FONT_COLOR
}

export const CartContainer = styled.div<cartColorProps>`
  background-color: ${(props) =>
    props.theme.color[CART_BG_COLOR[props.backgroudColor]]};
  border-radius: 6px;
  height: 2.375rem;
  width: 2.375rem;

  display: grid;
  place-items: center;

  cursor: pointer;
  color: ${(props) => props.theme.color[CART_FONT_COLOR[props.fontColor]]};
  transition: 500ms opacity;

  &:hover {
    opacity: 0.8;
  }
`
