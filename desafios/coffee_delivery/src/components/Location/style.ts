import { styled } from 'styled-components'

export const LocationContainer = styled.div`
  background-color: ${(props) => props.theme.color['purple-light']};
  border-radius: 6px;
  padding: 0.5rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: ${(props) => props.theme.font.TextS.size};
  font-weight: ${(props) => props.theme.font.TextS.Weight};
  color: ${(props) => props.theme.color['purple-dark']};

  svg {
    color: ${(props) => props.theme.color.purple};
  }
`
