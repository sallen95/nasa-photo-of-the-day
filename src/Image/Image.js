import React from 'react'
import styled from 'styled-components'

const StyledNasaImage = styled.div`
    img {
        width:50%;

        @media (max-width: 800px) {
            width:100%;
        }
    }
`
function Image(props) {
    const { source } = props

    return (
        <StyledNasaImage>
            <img alt='picture of the day from Nasa' src={source}/>
        </StyledNasaImage>
    )
}

export default Image;