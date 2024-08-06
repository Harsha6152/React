import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
const initialState = {
    load: true,
    error: '',
    post: {}
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                load: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                load: false,
                post: {},
                error: 'SOMETHING WENT WRONG'
            }
        default:
            return state



    }
}

function Datafecthwithreducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
            })

    }, [])
    return (
        <div>
            {state.load ? "Loading" : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default Datafecthwithreducer