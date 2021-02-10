import React from 'react'
import '../css/mystyles.css'
import './Home.css'
const Home = props => {
    return(
        <>
            <div className="homepage-div">
                <div className="title-subtitle-div">
                    <p className="title is-1 has-text-centered center">The Shoppies</p>
                    <p className="subtitle is2 has-text-centered center">The 2021 Shopify Movie Awards</p>
                </div>
                <hr className="div-line"/>
                <div className="buttons has-addons is-centered">
                    <button className="button is-large" onClick={() => {props.history.push("/vote")}}>Vote Now</button>
                </div>
            </div>
        </>
    )
}

export default Home