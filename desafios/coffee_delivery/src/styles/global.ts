import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    line-height: 1.3;
    font-size:16px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
}

body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
}

body {
    display: flex;
    justify-content:center;
    align-items:center;
    background-color: ${(props) => props.theme.color.background};
}

#root {
   width: 70rem;
}

`
