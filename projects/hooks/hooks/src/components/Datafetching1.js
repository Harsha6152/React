import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Datafetching1() {
    const [load, setLoad] = useState(true)
    const [err, setErr] = useState('')
    const [post, setPost] = useState({})
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                setLoad(false)
                setPost(res.data)
                setErr('')
            })
            .catch(error => {
                setLoad(false)
                setPost({})
                setErr("Something went wrong")
            })

    }, [])
    return (
        <div>
            {load ? "Loading" : post.title}
            {err ? err : null}

        </div>
    )
}

export default Datafetching1