import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import News from './pages/news'
import { Route, BrowserRouter, Routes } from "react-router-dom"
import NewsInside from './pages/news/newsInside'
import HelpFamily from './pages/helpFamily'
import Help from './pages/help'
import Valunteers from './pages/volunteers'
import HomeCareSchool from './pages/projects/homeCareSchool'

import Home from './pages/home'
import DocumentsPage from './pages/documentsPage'
import Vacancy from './pages/vacancy'
import Contacts from './pages/contacts'
import Team from './pages/team'

import ProjectInTouch from './pages/palliativeDropdown/projectInTouch'
import SisterCare from './pages/palliativeDropdown/sisterCare'
import Palliative from './pages/projects/palliative'
import HelpPalliative from './pages/projects/helpPalliative'
import DementiaNo from './pages/projects/dementiaNo'
import SeriouslyIllFamily from './pages/projects/seriouslyIllFamily'

import Donation from './pages/projects/donation'
import ProjectNews from './pages/palliativeDropdown/projectNews';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/news" element={<News />} />
        <Route path="/news-inside/:id" element={<NewsInside />} />
        {/* <Route path="/bud-page" element={<Bud />} /> */}
        <Route path="/help-family" element={<HelpFamily />} />
        {/* <Route path="/liver-trans" element={<LiverTrans />} /> */}
        <Route path="/valunteers" element={<Valunteers />} />
        <Route path="/help" element={<Help />} />
        <Route path="/home-care-school" element={<HomeCareSchool />} />

        <Route path="/documents-page" element={<DocumentsPage />} />
        <Route path="/vacancy" element={<Vacancy />} />
        <Route path="/contacts" element={<Contacts />} />
        {/* <Route path="/reports" element={<Reports />} /> */}
        <Route path="/team" element={<Team />} />
        {/* <Route path="/about" element={<About />} /> */}

        <Route path="/project-in-touch" element={<ProjectInTouch />} />
        <Route path="/sister-care" element={<SisterCare />} />
        <Route path="/palliative" element={<Palliative />} />
        <Route path="/project-news" element={<ProjectNews />} />

        {/* <Route path="/school/stroke" element={<Stroke />} />
        <Route path="/school/dementia" element={<Dementia />} />
        <Route path="/school/rehabilitation" element={<Rehabilitation />} />
        <Route path="/school/pain" element={<Pain />} />
        <Route path="/school/hygiene" element={<Hygiene />} />
        <Route path="/school/feeding" element={<Feeding />} />
        <Route path="/school/preventionOfFalls" element={<PreventionOfFalls />} />
        <Route path="/school/organizationLife" element={<OrganizationLife />} />
        <Route path="/school/complication" element={<Complication />} />
        <Route path="/school/featuresOfCare" element={<FeaturesOfCare />} />
        <Route path="/school/psychologicalAspects" element={<PsychologicalAspects />} /> */}

        <Route path="/helpPalliative" element={<HelpPalliative />} />
        <Route path="/dementiaNo" element={<DementiaNo />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/seriouslyIllFamily" element={<SeriouslyIllFamily />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
