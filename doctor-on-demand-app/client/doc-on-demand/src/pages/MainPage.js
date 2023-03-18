import React, { useState, useEffect } from "react";
import axios from "axios";
import DoctorCard from "../components/DoctorCard";
import "../styles/mainPage.css";


export default function MainPage() {

  const [city, setCity] = useState("");
  const [useMyLocation, setUseMyLocation] = useState(true);

  useEffect(() => {
    if (useMyLocation && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();
          setCity(data.address.city);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, [useMyLocation]);

  const [doctors, setDoctors] = useState([]);

  async function fetchData() {
    axios.get("http://localhost:5000/api").then(
      res => {
        console.log(res.data)
        setDoctors(res.data);
      }
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  
  const [selectedCategory, setSelectedCategory] = useState("GP");
  const categories = [...new Set(doctors.map((doctor) => doctor.category ))];
  console.log(selectedCategory);
  
  const filteredDoctors = doctors.filter(
    (doctor) => doctor.category === selectedCategory && (!city || doctor.location === city) 
    );
    
  return (
    <div>
      <div className="gadgets-container">
        <div className="welcome-message"> Hey, user!</div>
        <div className="searchBar">
          <input type="text" placeholder="Search doctors..." />
        </div>
        
      </div>

      <div>
          <label htmlFor="location-switch">Use my location:</label>
          <input type="checkbox" id="location-switch" checked={useMyLocation} onChange={() => setUseMyLocation(!useMyLocation)} />
          {!useMyLocation && <input type="text" placeholder="Enter a location" value={city} onChange={(e) => setCity(e.target.value)} />} {/* new textbox */}
        </div>
      {filteredDoctors.length > 0 ? (
        <>
          <h1>Categories</h1>
          <div>
            <div className="categories">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-button ${
                    category === selectedCategory ? "selected" : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="doctor-cards">
              {filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.name} name={doctor.lName} category={doctor.category} image={doctor.image} doctorID={doctor._id}/>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="no-doctors">No doctors available in the current city</div>
      )}
    </div>
  );
}

