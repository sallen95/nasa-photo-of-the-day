import React from 'react'
import styled from 'styled-components'


const StyledHeader = styled.div`
    display:flex;
    align-items: center;
    justify-content:space-around;
    background-color: grey;

    nav a{
        text-decoration:none;
        color:black;
        margin-left: 4rem;
        
        &:hover {
            text-decoration:underline;
        }
    }

`

function Header(props) {
    return (
        <StyledHeader>
            <h1>We Love Nasa!</h1>
            <nav>
                <a href='#https://api.nasa.gov/#apod'>Nasa APIs</a>
                <a href='#https://cat-bounce.com/'>Cat Site</a>
            </nav>
        </StyledHeader>
    )
}

export default Header;