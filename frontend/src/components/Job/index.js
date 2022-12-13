import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Job({ job }) {

  return (
    <div className="pro">
      <Link to={`/jobdetails/${job._id}`}>
        <img src={job.image} alt=""></img>
      </Link>
      <div className="des">
        <span>JOB</span>
        <Link to={`/jobdetails/${job._id}`}>
          <h5 style={{letterSpacing:'1px',fontFamily:'Nunito Sans'}}>{job.name}</h5>
        </Link>
        <span>Quantity</span>
        <h4>{job.countInStock}</h4>
      </div>
    </div>
  );
}

export default Job;
