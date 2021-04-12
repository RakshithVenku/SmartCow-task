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
                <div style={{textAlign : 'left'}}>
                    <Grid container  display="flex" justifyContent="center">
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