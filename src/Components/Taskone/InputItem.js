import React from 'react'
import {Typography,Box} from '@material-ui/core';

const defaultProps = {
    bgcolor: 'background.paper',
    m: 2,
    border: 1,
    style: { width: '7rem', height: '7rem' },
  };

const InputItem = (props) => {
    const {s,i} = props
    return (
            <Box borderColor={((i+1) % 3 === 0) ? "#00cccc" : "grey.500"} {...defaultProps} >   
               <Typography variant="inherit" component="h1" style={{textAlign:'center', margin:'30px'}}>
                 {s}
               </Typography>
            </Box>
    )
}

export default InputItem