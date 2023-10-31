import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  display: grid;
  grid-template-rows: 30% 1fr;
  gap: 3rem;

  @media only screen and (max-device-width: 1024px) {
    grid-template-rows: 20% 1fr;
  }

  @media only screen and (max-device-width: 768px) {
    grid-template-rows: 16% 1fr;
    gap: 6rem;
  }

  @media only screen and (max-device-width: 320px) {
    grid-template-rows: 20% 1fr;
    gap: 1.5rem;
  }
`

export const Intro = styled.section`
  display: grid;
  grid-template-columns: 56% 1fr;
  column-gap: 3.375rem;

  @media only screen and (max-device-width: 425px) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
`

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`

export const Title = styled.div`
  h1 {
    color: ${(props) => props.theme.color['base-title']};
    font: ${(props) => props.theme.font.TitleXL};
    margin-bottom: 1rem;

    @media only screen and (max-device-width: 1024px) {
      font: ${(props) => props.theme.font.TitleL};
    }
  }

  p {
    color: ${(props) => props.theme.color['base-subtitle']};
    font: ${(props) => props.theme.font.TextLRegular};

    width: 90%;
  }
`
export const HighLightContainer = styled.div`
  ul {
    display: grid;
    grid-template-columns: 40% 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 1.25rem;
    column-gap: 2.5rem;
    list-style: none;

    @media only screen and (max-device-width: 320px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
  }
`

const HIGH_LIGHT_COLOR = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  purple: 'purple',
  gray: 'base-text',
} as const

interface HighLightColorProps {
  highlightcolor: keyof typeof HIGH_LIGHT_COLOR
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

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background-color: ${(props) =>
      props.theme.color[HIGH_LIGHT_COLOR[props.highlightcolor]]};

    svg {
      color: ${(props) => props.theme.color.white};
      max-width: 90%;
      height: auto;
    }

    @media only screen and (max-device-width: 425px) {
      width: 2.8rem;
      height: 2rem;
    }

    @media only screen and (max-device-width: 320px) {
      width: 2rem;
      height: 2rem;
    }
  }
`

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
  }

  @media only screen and (max-device-width: 425px) {
    img {
      max-width: 60%;
      height: auto;
      object-fit: cover;
    }
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

  @media only screen and (max-device-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-device-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
    place-items: center;
  }
`
export const ListItem = styled.li``
