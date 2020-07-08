import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, ...other }) => (
    <Route
        {...other}
        render={(_ => (localStorage.getItem(`token`)) ? (<Component />) : (<Redirect to="/login" />))}
    />

)

