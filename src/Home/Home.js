import React from 'react'
import '../css/mystyles.css'
import './Home.css'
const Home = () => {
    return(
        <>
            <div className="temp-nav-area"></div>
            <div className="main">
                <h1 className="title is-4 has-text-centered">Shopify Presents</h1>
                <p className="title is-1 has-text-centered">The Shoppies</p>
                <hr className="header-divider"/>
                <div className="content has-text-centered">
                    <h3>Shopify has expanded into the movie awards business, and we need your help!<br/> It's up to you to vote for your 5 favorite movies!</h3>
                </div>
                <div className="buttons has-addons is-centered">
                    <button className="button is-primary is-light">Test</button>
                </div>
            </div>
        </>
    )
}

export default Home