import React from 'react'
import Card from '../Card';
import { Container } from './styles'

const Cards = ({characters}) => {
    return(
        <Container>
            {characters.map( (character) => {
                return <Card className="animated fadeIn" key={character.id}
                    character = {character}
                />
            })}
        </Container>
    )
}

export default Cards;
