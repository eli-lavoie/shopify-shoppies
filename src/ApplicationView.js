import React from 'react'
import {Route, Redirect} from 'react-router-dom'

//Content Imports
import Home from './Home/Home'
import Vote from './Vote/Vote'

const ApplicationView = props => {

    return(
        <>
            <Route exact path="/"
            render={props => {return <Home {...props}/>}}/>
        
            <Route exact path="/vote"
            render={props => {return <Vote {...props}/>}}/>
        </>

    )

}

export default ApplicationView