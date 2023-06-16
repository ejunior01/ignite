import { styled } from 'styled-components'

export const CoffeeCardContainer = styled.div`
  padding: 0 1.5rem 1.25rem;
  display: grid;
  grid-template-rows: 35% 1fr;

  row-gap: 0.75rem;

  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme.color['base-card']};
  height: 19.375rem;
`

export const Name = styled.h2`
  font: ${(props) => props.theme.font.TitleS};
  color: ${(props) => props.theme.color['base-subtitle']};
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`
export const Description = styled.p`
  font: ${(props) => props.theme.font.TextS};
  color: ${(props) => props.theme.color['base-label']};
  text-align: center;
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

  margin-right: 1rem;

  font: ${(props) => props.theme.font.TextS};
  color: ${(props) => props.theme.color['base-text']};

  span {
    font: ${(props) => props.theme.font.TitleM};
  }
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

  svg:hover {
    color: ${(props) => props.theme.color['purple-dark']};
  }
`

export const Coffe = styled.div`
  position: relative;
  display: grid;

  img {
    width: 7.5rem;
    height: 7.5rem;
    position: absolute;
    top: 40%;
    right: 50%;
    transform: translate(50%, -50%);
  }
`
