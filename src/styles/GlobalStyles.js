import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    color: white;
}

html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: rgb(32, 35, 41);
}

button {
    background: none;
    border: none;
    cursor: pointer;
    line-height: 1.5;
    font: 700 2vw 'Roboto Slab', sans-serif;
    padding: 1%;
    letter-spacing: 1%;
    width: 80%;
    box-shadow: inset 0 0 0 2px #58cdd1;
    color: #58afd1;
    -webkit-transition: color 0.25s 0.0833333333s;
    transition: color 0.25s 0.0833333333s;
    position: relative;
    margin-bottom: 10%;
    @media (max-width: 576px) {
        font-size: 24px;
    }
}

h1, h4 {
    text-align: center;
}

button:hover {
    color: #ffe593;
    box-shadow: inset 0 0 0 2px #ffe593;
}

button:disabled {
    color: gray;
    box-shadow: inset 0 0 0 2px gray;
    cursor: not-allowed;
}

input[type="text"] {
    display: block;
    margin: 0 0 20px;
    padding: 8px 12px 10px 12px;
    border: 1px solid rgba(0,0,0,.5);
    background: rgba(0,0,0,.25);
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}
  
li {
    float: left;
}
  
li a {
    display: block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}
  
li a:hover {
    background-color: #111;
}

footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #333;
    text-align: center;
    padding-top: 2%;
    padding-bottom: 2%;
}
`

export const PageContainer = styled.div`
    margin-top: 6%;
    margin-bottom: 6%;
`