import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Amplify from 'aws-amplify'
import aws_export from './aws-exports'
import { GlobalStyles } from './index-styles'

Amplify.configure(aws_export)

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
