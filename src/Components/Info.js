import React from 'react'
import styled from 'styled-components'

const StyledNasaInfo = styled.div`
    text-align: center;
    border-bottom: 1px dotted black;
    span {
        margin: .5%;
        font-weight: bold;
    }
    
    p{
        width:80%;
        margin: auto;
        margin-top:1%;
    }
`

function Info (props){
    const { copyright, date, explanation } = props

    return (
        <StyledNasaInfo>
            <span>{copyright}</span>
            <span>{date}</span>
            <p>{explanation}</p>
        </StyledNasaInfo>
    );
};

export default Info;