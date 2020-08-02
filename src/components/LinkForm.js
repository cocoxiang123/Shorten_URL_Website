import React from 'react'

function LinkForm() {
    return (
        <div className="linkForm-container">
            <form className="linkForm">
        <input className="linkForm-input" placeholder="Shorten a link here..." />
        <span className="hide">Please add a link</span>
        <button className="btn btn-shorten">Shorten it!</button>
            </form>
        </div>
    )
}

export default LinkForm
