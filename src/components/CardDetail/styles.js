import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Img = styled.img`
    height: auto;
    width: 50%;
    border-radius: 50%;
    border: 5px solid #272133;
    margin-top: 20px;
    box-shadow: 0 10px 50px rgba(235, 25, 110, 1);
`

export const Title = styled.p`
    margin-top: 15px;
    font-size: 3vw;
    text-align: center;
    height: auto;
    @media (max-width: 576px) {
        font-size: 24px;
        height: 50px;
    }
`

export const CardContainer = styled.div`
    background-color: rgb(36, 40, 47);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.7);
    color: white;
    width: 60%;
    height: auto;
    margin-left: 1%;
    margin-right: 1%;
    margin-bottom: 2%;
    border-radius: 20px;
    ${fadeIn({ time: '1s' })}
    @media (max-width: 576px) {
        width: 80%;
        height: auto;
    }
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Button = styled.button`
    width: 50%;
    margin-top: 5%;
    font-size: 18px;
`