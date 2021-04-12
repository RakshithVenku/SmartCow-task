import React from 'react'
import {useSelector} from 'react-redux'
import { Grid } from '@material-ui/core'
import InputItem from './InputItem'

const InputList = (props) => {
    const str = useSelector((state) => {
        return state.input
    })

    return (
        <div>
            {str.length > 0 && (
                <div>
                    <Grid container >
                        {str.split('').map((s,i) => {
                                return <Grid item>
                                          <InputItem s={s} i={i}/>
                                      </Grid>      
                        })}
                    </Grid>
                </div>
            )}
        </div>
    )
}

export default InputList