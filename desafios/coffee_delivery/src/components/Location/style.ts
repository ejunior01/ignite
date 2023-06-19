import { styled } from 'styled-components'

export const LocationContainer = styled.div`
  background-color: ${(props) => props.theme.color['purple-light']};
  border-radius: 6px;
  padding: 0.5rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
  font: ${(props) => props.theme.font.TextS};
  color: ${(props) => props.theme.color['purple-dark']};

  svg {
    color: ${(props) => props.theme.color.purple};
  }
`
