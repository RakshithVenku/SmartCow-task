import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div>
      <div className="section">
        <div className="title">
          <h1>SmartCow Assignment</h1>
        </div>
        <div className="btn-content">
            <Link to="/taskone"><Button className="btn-primary" id="t1-btn">Task One</Button></Link>
            <Link to="/tasktwo"><Button className="btn-primary" id="t2-btn">Task Two</Button></Link>
        </div>
      </div>
    </div>
  );
}