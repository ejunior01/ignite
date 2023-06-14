import { styled } from 'styled-components'

export const CartContainer = styled.div`
  background-color: ${(props) => props.theme.color['yellow-light']};
  border-radius: 6px;
  height: 2.375rem;
  width: 2.375rem;

  display: grid;
  place-items: center;

  cursor: pointer;
  color: ${(props) => props.theme.color['yellow-dark']};
  transition: 500ms background-color, color;

  &:hover {
    background-color: ${(props) => props.theme.color.yellow};
    color: ${(props) => props.theme.color['yellow-light']};
  }
`
