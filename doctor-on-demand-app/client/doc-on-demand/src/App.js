import logo from './logo.svg';
import './App.css';
import React , {useState, useEffect} from 'react';
import axios from 'axios'

function App() {

  const [backendData, setBackEndData] = useState([]);
 async function fetchData(){axios.get("http://localhost:5000/api").then(
     
    ).then(
      res => {
        console.log(res.data)
        setBackEndData(res.data);
      }
    )}
  useEffect(()=>{
    
    fetchData();
  }, [])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
