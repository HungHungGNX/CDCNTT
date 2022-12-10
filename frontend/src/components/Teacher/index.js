import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../Rating";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Teacher({ teacher }) {
  const navigate = useNavigate();

  return (
    <div className="pro">
      <Link to={`/coursedetails/${teacher._id}`}>
        <img src={teacher.image} alt=""></img>
      </Link>
      <div className="des">
        <span>Teacher</span>
        <Link to={`/teacherdetails/${teacher._id}`}>
          <h5 style={{letterSpacing:'1px',fontFamily:'Nunito Sans'}}>{teacher.name}</h5>
        </Link>
        <div className="star">
          <Rating
            value={teacher.rating}
            text={`${teacher.numReviews} reviews`}
            color={"#f8e825"}
          />
        </div>
      </div>
    </div>
  );
}

export default Teacher;
