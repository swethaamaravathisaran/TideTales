import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import About from './Components/About';
import Contact from './Components/Contact';
import Dashboard from './Components/Dashboard';
import MarineStories from './Components/MarineStories';
import Planktons from './Components/Planktons';
import Nektons from './Components/Nektons';
import Benthos from './Components/Benthos';
import MarinePlants from './Components/MarinePlants';
import Coral from './Components/Coral';
import MarineVertebrates from './Components/MarineVertebrates';
import  MarineInvertebrates from './Components/MarineInvertebrates';
import Organisms from './Components/Organisms';
import OceanConservation from './Components/OceanConservation';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
import Event from './Components/Events';
import Piechart from './Components/Piechart';
import Info from './Components/Info';
import Education from './Components/Education';
import News from './Components/News';

export default function App() {
  return (
    <div>
       <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} /> 
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/marine"element={<MarineStories/>} />
        <Route path="/plankton"element={<Planktons/>} />
        <Route path="/nekton"element={<Nektons/>} />
        <Route path="/benthos"element={<Benthos/>} />
        <Route path="/marine-plants"element={<MarinePlants/>} />
        <Route path="/coral-reefs"element={<Coral/>} />
        <Route path="/marine-vertebrates"element={<MarineVertebrates/>} />
        <Route path="/marine-invertebrates"element={<MarineInvertebrates/>} />
        <Route path="/organisms"element={<Organisms/>} />
        <Route path="/ocean-conservation"element={<OceanConservation/>} />
        <Route path="/login"element={<LoginButton/>} />
        <Route path="/logout"element={<LogoutButton/>} />
        <Route path="/events"element={<Event/>} />
        <Route path="/piechart"element={<Piechart/>} />
        <Route path="/info"element={<Info/>} />
        <Route path="/education"element={<Education/>} />
        <Route path="/news"element={<News/>} />
        
         
      </Routes>
    </BrowserRouter>
    </div>
  )
}
