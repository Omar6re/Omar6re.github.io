import React from 'react'
import { useHistory } from "react-router-dom";
import { Img, Title, CardContainer } from './styles'

const Card = ({character}) => {
    let history = useHistory();
    const handleClick = () => {
        history.push(`/cardDetail/${character.id}`, {...character});
    }

    return(
        <React.Fragment key={character.id}>
            <CardContainer>
                <Img src={character.image} alt={character.name} />
                <Title>{character.name}</Title>
                <button onClick={() => handleClick()}>Ver detalles</button>
            </CardContainer>
        </React.Fragment>
    )
}

export default Card;
