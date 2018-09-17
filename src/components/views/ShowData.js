import React, { Component } from 'react';

const showData = (props) => {
    return (
        <div className='comment'>
            <h1>{props.item.email}</h1>
            <p>{props.item.body}</p>
        </div>
    )
}

export default showData;