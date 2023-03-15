import React, { useState } from "react";
import DoctorCard from "../components/DoctorCard";
import "../styles/mainPage.css";

const doctors = [
  { name: "Dr. Smith", category: "Cardiology" },
  { name: "Dr. Jones", category: "Cardiology" },
  { name: "Dr. Test", category: "Cardiology" },
  { name: "Dr. Test2", category: "Cardiology" },
  { name: "Dr. Test3", category: "Cardiology" },
  { name: "Dr. Test4", category: "Cardiology" },
  { name: "Dr. Lee", category: "Dermatology" },
  { name: "Dr. Chen", category: "Dermatology" },
  { name: "Dr. Singh", category: "Oncology" },
  { name: "Dr. Patel", category: "Oncology" },
  { name: "Dr. Peters", category: "Testing" },
  { name: "Dr. Petar", category: "Testing" },
  { name: "Dr. Smith", category: "More testing" }
];

export default function MainPage() {
  const [selectedCategory, setSelectedCategory] = useState("Cardiology");

  const categories = [...new Set(doctors.map((doctor) => doctor.category))];

  const filteredDoctors = doctors.filter(
    (doctor) => doctor.category === selectedCategory
  );


  return (
    <div>
      <div className="gadgets-container">
        <div className="welcome-message"> Hey, user!</div>
        <div className="searchBar">
          <input type="text" placeholder="Search doctors..." />
        </div>
      </div>
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
            <DoctorCard key={doctor.name} name={doctor.name} category={doctor.category} image={"icon-192x192.png"} doctorID={1}/>
          ))}
        </div>
      </div>
    </div>
  );
}
