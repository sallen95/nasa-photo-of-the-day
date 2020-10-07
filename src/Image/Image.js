import React from 'react'

function Image(props) {
    const { source } = props

    return (
        <div className = 'nasaImage'>
            <img alt='picture of the day from Nasa' src={source}/>
        </div>
    )
}

export default Image;