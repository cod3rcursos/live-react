import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Container from '../shared/template/Container'
import Footer from '../shared/template/Footer'
import Header from '../shared/template/Header'
import Nav from '../shared/template/Nav'
import SideNav from '../shared/template/SideNav'
import Toolbar from '../shared/template/Toolbar'
import TopNav from '../shared/template/TopNav'
import Routes from './Routes'

const App = (props) => {
    return (
        <Container>
            <Header>
                <h1>My Finances</h1>
            </Header>
            <Toolbar></Toolbar>
            <Router>
                <TopNav>
                    <Nav></Nav>
                </TopNav>
                <SideNav>
                    <Nav></Nav>
                </SideNav>
                <Routes></Routes>
            </Router>
            <Footer>
                <span>2021 © COD3R - My Finances.</span>
            </Footer>
        </Container>
    )
}

export default App
