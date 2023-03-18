import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/NavBar";
import MainPage from "./pages/MainPage";
import DoctorInfoPage from "./pages/DoctorInfoPage";

//See if the browser supports Service Workers, if so try to register one
if("serviceWorker" in navigator){
  navigator.serviceWorker.register("service-worker.js").then(function(registering){
    // Registration was successful
    console.log("Browser: Service Worker registration is successful with the scope",registering.scope);
  }).catch(function(error){
    //The registration of the service worker failed
    console.log("Browser: Service Worker registration failed with the error",error);
  });
} else {
  //The registration of the service worker failed
  console.log("Browser: I don't support Service Workers :(");
}
function App() {


  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/doctors/:doctorID'element={<DoctorInfoPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
