import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 80%;
  height: calc(100vh - 8rem);
  margin: 4rem auto;
  padding: 1.5rem;
  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`
