import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    font-weight:400;
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
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.color.background};
}

h1,h2,h3 {
    font-family: 'Baloo 2', cursive;
}

#root {
    display: flex;
    flex-direction: column;
    width:78%;
    max-width:70rem;

}

@media only screen and (max-device-width: 1024px) {
    :root {
        font-size: 14px;
    }
}

@media only screen and (max-device-width: 768px) {
    :root {
        font-size: 12px;
    }
}

`
