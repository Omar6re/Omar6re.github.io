import React from 'react';
import { GlobalStyle } from '../../styles/GlobalStyles';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';

export const Layout = (props) => {
    return(
        <React.Fragment>
            <GlobalStyle/>
            <Navbar/>
            {props.children}
            <Footer/>
        </React.Fragment>
    )
}