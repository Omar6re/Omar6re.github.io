import React from 'react'
import { Img, Title, CardContainer, Container, Button } from './styles'

const CardDetail = ({character, goBack}) => {

    return(
        <Container>
            <CardContainer>
                <Img src={character.image} alt={character.name} />
                <Title>{character.name}</Title>
                <div>{`Estado: ${character.status}`}</div>
                <div>{`Especie: ${character.species}`}</div>
                <div>{`Género: ${character.gender}`}</div>
                <div>{`Origen: ${character.origin.name}`}</div>
                <div>{`Ubicación: ${character.location.name}`}</div>
                <Button onClick={() => goBack()}>Regresar</Button>
            </CardContainer>
        </Container>
    )
}

export default CardDetail;
