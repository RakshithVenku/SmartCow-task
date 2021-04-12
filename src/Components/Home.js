import React from "react";
import { Button , Typography, Grid, Paper} from "@material-ui/core";
import { Link } from "react-router-dom";
import AssignmentIcon from '@material-ui/icons/Assignment';


export default function Home() {
  return (
    <div>
      <Paper className="home-wrapper" elevation={7} >
      <Grid container spacing={4} >
        <Grid item xs={12} className="title">
          <Typography variant="h4">SmartCow Assignment</Typography>
        </Grid>
        <Grid item  xs={12} className="btn-content">
            <Link to="/task1"><Button className="btn-primary" id="t1-btn"><AssignmentIcon/>Task 1</Button></Link>
            <Link to="/task2"><Button className="btn-primary" id="t2-btn"><AssignmentIcon/>Task 2</Button></Link>
        </Grid>
      </Grid>
      </Paper>
    </div>
  );
}