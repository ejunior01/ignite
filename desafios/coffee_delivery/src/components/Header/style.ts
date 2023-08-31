import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem 0 0;
  margin-bottom: 4rem;
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

export const Logo = styled.div`
  display: flex;
  cursor: pointer;
`
