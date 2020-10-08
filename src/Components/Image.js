import React from 'react'
import styled from 'styled-components'

const StyledNasaImage = styled.div`
    text-align: center;
    img {
        width:50%;

        @media (max-width: 800px) {
            width:100%;
        }
    }
`
function Image(props) {
    const { title, source } = props

    return (
        <StyledNasaImage>
            <h2>{title}</h2>
            <img alt='picture of the day from Nasa' src={source}/>
        </StyledNasaImage>
    )
}

export default Image;