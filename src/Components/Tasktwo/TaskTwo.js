import React from 'react'
import VideoDiv from './VideoDiv'

import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    videoContent: {
      position: "fixed",
      bottom : "5px",
      right: "5px"
    },
  }));

const TaskTwo = (props) => {
    const classes = useStyles();

    return (
        <div>
            
            <div className={classes.videoContent}>
                <VideoDiv />
            </div>
        </div>
    )
}

export default TaskTwo