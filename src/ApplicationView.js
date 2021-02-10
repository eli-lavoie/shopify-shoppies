import React from 'react'
import {Route, Redirect} from 'react-router-dom'

//Content Imports
import Home from './Home/Home'

const ApplicationView = props => {

    return(
        <>
            <Route exact path="/"
            render={props => {return <Home {...props}/>}}/>
        </>
    )

}

export default ApplicationView