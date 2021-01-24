import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';

import Cards from '../components/Cards'
import PageDivider from '../components/PageDivider';
import { Search } from '../components/Search';

import { PageContainer } from '../styles/GlobalStyles'

import { URL_API } from '../commons/index'

const SearchPage = () => {
    const { name } = useParams();
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const fetchAPI = (url) => {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    return Promise.reject(response.status)
                }
            })
            .then(data => {
                setData(data)
                setLoading(false);
            })
            .catch(error => {
                setError(true);
                setLoading(false);
            });
    }

    const handleClick = (type) => {
        switch(type){
            case 'DECREMENT':
                setPage(page-1)
                fetchAPI(data.info.prev);
                break;
            case 'INCREMENT':
                setPage(page+1)
                fetchAPI(data.info.next);
                break;
            default:
                break;
        }
    }

    useEffect( () => {
        setLoading(true);
        setError(false);
        fetchAPI(URL_API.SEARCH(name))
    }, [name])

    if(loading){
        return('Cargando...')
    }

    return(
        <PageContainer>
            <h1>Rick and Morty API</h1>
            <Search 
                search = {name}
            />
            <h1>{`Resultados de la búsqueda "${name}"`}</h1>
            { error ? <h4>
                No se encontraron resultados.
            </h4> : <Cards
                characters={data.results}
            />}
            { !error ? < PageDivider
                info = {data.info}
                page = {page}
                handleClick = {handleClick}
            /> : null }
        </PageContainer>
    )
}

export default SearchPage;
