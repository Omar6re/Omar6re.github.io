import React, { useState, useEffect } from 'react'

import Cards from '../components/Cards'
import PageDivider from '../components/PageDivider';
import { Search } from '../components/Search';

import { PageContainer } from '../styles/GlobalStyles'

import { URL_API } from '../commons/index'

const MainPage = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const fetchAPI = (url) => {
        setLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })        
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
        fetchAPI(URL_API.ALL)
    }, [])

    if(!data.results){
        return('Cargando...')
    }

    return(
        <PageContainer>
            <h1>Rick and Morty API</h1>
            <Search
                search=""
            />
            { !loading ? <Cards
                characters = {data.results}
            /> : null }
            <PageDivider
                info = {data.info}
                page = {page}
                handleClick = {handleClick}
            />
        </PageContainer>
    )
}

export default MainPage;
