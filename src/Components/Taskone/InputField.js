import React from 'react'
import { useDispatch} from 'react-redux'
import {inputStr} from '../../actions/inputAction'

const InputField = (props) => {
    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        dispatch(inputStr(e.target.value))
    }

    return (
        <div>
            <input type="text" placeholder="enter input" onChange={handleInputChange}  />
        </div>
    )
}

export default InputField