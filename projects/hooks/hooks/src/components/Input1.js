import React, { useState } from 'react'
import useInput from './hooks/useInput'

function Input1() {
    const [fn, bindFn, resetFn] = useInput('')
    const [ln, bindLn, resetLn] = useInput('')
    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello! ${fn} ${ln} `)
        resetFn()
        resetLn()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First name</label>
                    <input {...bindFn} type="text" />
                </div>
                <div>
                    <label>Last name</label>
                    <input {...bindLn} type="text" />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Input1