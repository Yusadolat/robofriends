import React, { Component } from 'react'

const Hello = (props) => {
    return (
        <div className="f1 tc">
            <h1 className="b--gold">Hello World!</h1>
            <h2 className="ttc">{props.greeting}</h2>
        </div>)

}

export default Hello;