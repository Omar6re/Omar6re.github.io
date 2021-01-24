import styled from 'styled-components'

export const Container = styled.div`
    margin-bottom: 10%;
    align-items: center;
    justify-content: center;
    display:flex;
`

export const Button = styled.button`
    width: 25%;
    margin: 2%;
    @media (max-width: 576px) {
        width: 30%;
        font-size: 16px;
    }
`