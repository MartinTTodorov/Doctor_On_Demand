import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/NavBar";
import MainPage from "./pages/MainPage";
import DoctorInfoPage from "./pages/DoctorInfoPage";


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
