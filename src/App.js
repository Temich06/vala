import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Route, BrowserRouter, Routes } from "react-router-dom"
import Help from './pages/help'
import Valunteers from './pages/volunteers'
import HomeCareSchool from './pages/homeCareSchool'
import ValunteersDetail from './pages/volunteerDetail';
import VolunteerYour from './pages/volunteer-your';

import Home from './pages/home'
import Contacts from './pages/contacts'
import Team from './pages/team'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/valunteers" element={<Valunteers />} />
        <Route path="/help" element={<Help />} />
        <Route path="/home-care-school" element={<HomeCareSchool />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/team" element={<Team />} />
        <Route path="/volunteers-detail" element={<ValunteersDetail />} />
        <Route path="/your-volunteers" element={<VolunteerYour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
