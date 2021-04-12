import React from 'react'
import { useDispatch} from 'react-redux'
import {inputStr} from '../../actions/inputAction'
import {TextField} from '@material-ui/core'

const InputField = (props) => {
    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        dispatch(inputStr(e.target.value))
    }

    return (
        <div style = {{textAlign :'left', marginLeft: '16px',marginTop: '16px'}}>
            <TextField variant="outlined" type="text" placeholder="enter input" onChange={handleInputChange}  />
        </div>
    )
}

export default InputField