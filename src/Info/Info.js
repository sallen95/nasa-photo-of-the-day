import React from 'react'

function Info (props){
    const { copyright, date, explanation } = props

    return (
        <div>
            <span>{copyright}</span>
            <span>{date}</span>
            <p>{explanation}</p>
        </div>
    );
};

export default Info;