import React from 'react'
import LoaderSpinner from 'react-loader-spinner'


export const Loader = (_ =>
    <div className="key spinner">
        <LoaderSpinner type="Puff" color="#204963" height="100" width="100" />
        <p>Loading Data</p>
    </div>
)   
