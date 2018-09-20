import React from 'react'
import {BrowserRouter} from 'react-router-dom'

const withRouter = storyFn => <BrowserRouter>{storyFn()}</BrowserRouter>

export default withRouter
