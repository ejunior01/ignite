import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem 2rem 0;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
  }
`

export const Logo = styled.a`
  display: flex;
  cursor: pointer;

  transition: 100ms transform;

  &:hover {
    transform: scale(1.1);
  }
`
