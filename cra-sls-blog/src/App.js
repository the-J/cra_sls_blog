import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import Home from './pages/Home'
import NewPost from './pages/NewPost'

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/posts/new'>New Post</Link>
                    </li>
                </ul>
            </div>

            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/posts/new'>
                    <NewPost />
                </Route>
            </Switch>

        </Router>
    )
}

export default App
