import React from 'react'
import { withAuthenticator } from 'aws-amplify-react'

const Home = () => {
    const postsMock = [
        {
            id: 'id-1',
            title: 'title-1',
            content: 'content-1'
        }, {
            id: 'id-2',
            title: 'title-2',
            content: 'content-2'
        }
    ]

    return (
        <div>
            <h1>Home</h1>
            <ul>
                {postsMock.map(post =>
                    <li>
                        <h3><a href="/">{post.title}</a></h3>
                        <p>{post.content}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}
export default withAuthenticator(Home)