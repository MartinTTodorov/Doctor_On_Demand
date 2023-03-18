import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../styles/DoctorInfo.css'

export default function DoctorInfoPage() {
  const [doctorData, setDoctorData] = useState(null);

  let { doctorID } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/${doctorID}`);
        setDoctorData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!doctorData) {
    return <div>Loading...</div>;
  }

  return (
    
    <div>
      <div className="greeter">
        <div className="message">Thank you for choosing Dr. {doctorData.lName}</div>
      </div>

    <div className="container">
      <img className="image" src={doctorData.image} alt={doctorData.fName} />
      <div>
        <h1 className="name">{doctorData.fName} {doctorData.lName}</h1>
        <div className="category">{doctorData.category}</div>
      </div>
    </div>
    <div className="Info">
      <p className="description"><span className="label">Description:</span> {doctorData.description}</p>
      <p className="walkInHours"><span className="label">Walk-in hours:</span> {doctorData.walkinhours}</p>
      <p className="phone"><span className="label">Phone:</span> {doctorData.phone}</p>
    </div>
    </div>
  );
}
