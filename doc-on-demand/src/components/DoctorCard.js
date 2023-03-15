import React from "react";
import "../styles/DoctorCard.css"
import { useNavigate } from "react-router-dom";

function DoctorCard({ name, category, image, doctorID }) {

  const navigate = useNavigate();

  const showDoctorInfo = ()=>{
    navigate(`/doctors/${doctorID}`)
  }


  return (
    <div className="doctor-card">
      <div className="doctor-card-container">
        <img className="doctor-image" src={image} alt="no picture"></img>
        <div className="doctor-info">
          <h3>{name}</h3>
          <p>{category}</p>
          <button onClick={showDoctorInfo}>More info</button>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
