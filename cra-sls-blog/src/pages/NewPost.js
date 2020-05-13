import React, { useState } from 'react'

const NewPost = () => {
    const [ title, setTitle ] = useState('')
    const handleSetTitle = e => setTitle(e.target.value)

    const [ content, setContent ] = useState('')
    const handleSetContent = e => setContent(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()
        console.log('submit fired')
    }

    return (
        <div>
            <h1>Create new Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <h2>Title:</h2>
                        <input type="text" value={title} onChange={handleSetTitle} />
                    </label>
                    <hr />
                    <label>
                        <h2>Content:</h2>
                        <input type="text" value={content} onChange={handleSetContent} />
                    </label>
                </div>
                <div>
                    <input type="submit" value='Create new post' />
                </div>
            </form>
        </div>
    )
}

export default NewPost