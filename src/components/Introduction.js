import React from 'react'
import WorkingHome from '../images/illustration-working.svg'

function Introduction() {
    return (
        <section className="introduction-container">
            <img className="img-working" src={WorkingHome} alt="working-home" />
            <h1 className="intro-header">More than just shorter links</h1>
            <p className="intro-content">Build your brand’s recognition and get detailed insights on how your links are performing. </p>
        <button className="btn btn-getStart">Get Started</button>
        </section>
    )
}

export default Introduction
