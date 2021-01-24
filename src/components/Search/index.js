import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { Container, Button } from './styles'

export const Search = ({search}) => {
    const [searchText, setSearchText] = useState(search)
    let history = useHistory();

    const handleSearch = () => {
        if(searchText.length > 0){
            history.push(`/search/${searchText}`);
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
      }

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

    return(
        <Container>
            <div>
                <input value={searchText} onChange={handleChange} onKeyDown={handleKeyDown} type="text" placeholder="Busca un personaje"/>
                <Button onClick={handleSearch}>Buscar</Button>
            </div>
        </Container>
    )
}