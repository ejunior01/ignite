import { styled } from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  row-gap: 0.75rem;

  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme.color['base-card']};
  height: 19.375rem;
  width: 16rem;
  padding: 1.25rem;

  h2 {
    font: ${(props) => props.theme.font.TitleS};
    color: ${(props) => props.theme.color['base-subtitle']};
  }

  P {
    font: ${(props) => props.theme.font.TextS};
    color: ${(props) => props.theme.color['base-label']};
    text-align: center;
  }
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.25rem;
`
export const Tag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.26rem 0.5rem 0.25rem;
  border-radius: 100px;

  background-color: ${(props) => props.theme.color['yellow-light']};
  color: ${(props) => props.theme.color['yellow-dark']};
  font: ${(props) => props.theme.font.Tag};

  text-transform: uppercase;
`
export const Buy = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  margin-top: 2.0625rem;
`

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.25rem;

  font: ${(props) => props.theme.font.TextS};
  color: ${(props) => props.theme.color['base-text']};

  span {
    font: ${(props) => props.theme.font.TitleM};
  }
`

export const ProductActionContainer = styled.div`
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

  strong {
    font: ${(props) => props.theme.font.ButtonM};
    color: ${(props) => props.theme.color['base-text']};
  }
  svg {
    cursor: pointer;
  }

  svg:hover {
    color: ${(props) => props.theme.color['purple-dark']};
  }
`

export const ImageContainer = styled.div`
  position: relative;
  display: grid;
  flex: 1;
  width: 100%;

  img {
    max-width: 100%;
    height: auto;
    position: absolute;
    top: 25%;
    right: 50%;
    transform: translate(50%, -50%);
  }
`

export const RemoveCoffe = styled.div`
  display: flex;
  column-gap: 0.25rem;

  span {
    text-transform: uppercase;
    font: ${(props) => props.theme.font.ButtonM};
    color: ${(props) => props.theme.color['base-text']};
  }
  svg {
    color: ${(props) => props.theme.color.purple};
  }
`
