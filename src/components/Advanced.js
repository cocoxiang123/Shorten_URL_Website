import React from 'react'
import Brand from '../images/icon-brand-recognition.svg'
import Detailed from '../images/icon-detailed-records.svg'
import Customizable from '../images/icon-fully-customizable.svg'
function Advanced() {
    return (
        <div className="advanced-container">
            <header className="advanced-ads">
                <h2 className="advertise-header">Advanced Statistics</h2>
                <p className="advertise-content">Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </header>
            <section className="advertise-card">
                <img className="advertise-logo" src={Brand} alt="brand-recognition" />
            <h3 className="advertise-card-header">Brand Recognition</h3>
            <p className="advertise-card-content">Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
            </section>
            <section className="advertise-card">
            <img className="advertise-logo" src={Detailed} alt="detailed-Records" />
            <h3 className="advertise-card-header">Detailed Records</h3>
            <p className="advertise-card-content">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </section>
            <section className="advertise-card">
            <img className="advertise-logo" src={Customizable} alt="fully-Customizable" />
            <h3 className="advertise-card-header">Fully Customizable</h3>
            <p className="advertise-card-content">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
            </section>
        </div>
    )
}

export default Advanced
