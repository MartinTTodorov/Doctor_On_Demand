import {useState, useEffect} from "react";
import axios from "axios";

export default function DoctorInfoPage(){
    const [doctorData, setDoctorData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.example.com/doctors/123");
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
      <img src={doctorData.image} alt={doctorData.name} />
      <h1>{doctorData.name}</h1>
      <p>{doctorData.description}</p>
      <p>Walk-in free hours: {doctorData.walkInFreeHours}</p>
    </div>
  );
}
