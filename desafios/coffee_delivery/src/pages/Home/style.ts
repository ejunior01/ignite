import { styled } from 'styled-components'

export const HomeContainer = styled.div``

export const Intro = styled.section`
  display: grid;
  grid-template-columns: 56% 1fr;
  grid-template-rows: 70% 1fr;
  column-gap: 3.375rem;

  grid-template-areas: 'title banner' 'highLights banner';

  margin-top: 4rem;
  margin-bottom: 2rem;
`
export const Title = styled.div`
  grid-area: title;

  h1 {
    color: ${(props) => props.theme.color['base-title']};
    font: ${(props) => props.theme.font.TitleXL};
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme.color['base-subtitle']};
    font: ${(props) => props.theme.font.TextLRegular};

    width: 90%;
  }
`
export const HighLightContainer = styled.div`
  grid-area: highLights;

  ul {
    display: grid;
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 1.25rem;
    column-gap: 2.5rem;
    list-style: none;
  }
`

const HIGH_LIGHT_COLOR = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  purple: 'purple',
  gray: 'base-text',
} as const

interface HighLightColorProps {
  highLightColor: keyof typeof HIGH_LIGHT_COLOR
}

export const HighLight = styled.li<HighLightColorProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: ${(props) => props.theme.color['base-text']};
  font: ${(props) => props.theme.font.TextMRegular};

  div {
    width: 2rem;
    height: 2rem;

    display: grid;
    place-content: center;

    border-radius: 50%;
    background-color: ${(props) =>
      props.theme.color[HIGH_LIGHT_COLOR[props.highLightColor]]};

    svg {
      color: ${(props) => props.theme.color.white};
    }
  }
`

export const Banner = styled.div`
  grid-area: banner;
  img {
    width: 100%;
    height: 100%;
  }
`

export const CoffeeList = styled.div`
  margin-bottom: 9.8125rem;

  & > h2 {
    font: ${(props) => props.theme.font.TitleL};
    color: ${(props) => props.theme.color['base-subtitle']};
    margin-bottom: 3.375rem;
  }
`

export const ListContainer = styled.ul`
  list-style-type: none;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2.5rem;
  column-gap: 2rem;
`
export const ListItem = styled.li``
