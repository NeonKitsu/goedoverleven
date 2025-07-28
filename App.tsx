
import React from 'react';
import { Router, Switch, Route } from "wouter";
import HomePage from './pages/HomePage';
import PlaceholderPage from './pages/PlaceholderPage';
import NoodpakketPage from './pages/NoodpakketPage';
import SamenstellenNoodpakketPage from './pages/SamenstellenNoodpakketPage';
import { navLinks } from './constants';
import BottomNavbar from './components/BottomNavbar';
import AutoNoodpakketPage from './pages/AutoNoodpakketPage';
import OverstromingenNoodpakketPage from './pages/OverstromingenNoodpakketPage';
import VluchttasPage from './pages/VluchttasPage';
import StroomuitvalPage from './pages/StroomuitvalPage';
import VaardighedenPage from './pages/VaardighedenPage';
import WaterPillarPage from './pages/water/WaterPillarPage';
import FiltersVergelijkenPage from './pages/water/FiltersVergelijkenPage';
import LangdurigOpslaanPage from './pages/water/LangdurigOpslaanPage';
import ZuiverenZonderFilterPage from './pages/water/ZuiverenZonderFilterPage';
import RegenwaterOpvangenPage from './pages/water/RegenwaterOpvangenPage';
import WaterbronnenVindenPage from './pages/water/WaterbronnenVindenPage';
import KookadviesBegrijpenPage from './pages/water/KookadviesBegrijpenPage';
import VoedselPillarPage from './pages/voedsel/VoedselPillarPage';
import KokenZonderStroomPage from './pages/voedsel/KokenZonderStroomPage';
import CrisisMoestuinPage from './pages/voedsel/CrisisMoestuinPage';
import VoorraadkastChecklistPage from './pages/voedsel/VoorraadkastChecklistPage';
import ConserverenVoorBeginnersPage from './pages/voedsel/ConserverenVoorBeginnersPage';
import NoodvoorraadReceptenPage from './pages/voedsel/NoodvoorraadReceptenPage';
import JagenEnVissenPage from './pages/voedsel/JagenEnVissenPage';
import OverOnsPage from './pages/OverOnsPage';
import DisclaimerPage from './pages/DisclaimerPage';
import PrivacybeleidPage from './pages/PrivacybeleidPage';
import PageMetaHandler from './components/PageMetaHandler';

const App: React.FC = () => {
  const customNavRoutes = [
    'noodpakket', 
    'noodpakket/samenstellen-noodpakket',
    'vaardigheden',
    'vaardigheden/water',
    'vaardigheden/voedsel',
    'vaardigheden/water/filters-vergelijken',
    'vaardigheden/water/langdurig-opslaan',
    'vaardigheden/water/zuiveren-zonder-filter',
    'vaardigheden/water/regenwater-opvangen',
    'vaardigheden/water/waterbronnen-vinden',
    'vaardigheden/water/kookadvies-begrijpen',
    'vaardigheden/voedsel/koken-zonder-stroom',
    'vaardigheden/voedsel/crisis-moestuin',
    'vaardigheden/voedsel/voorraadkast-checklist',
    'vaardigheden/voedsel/conserveren-voor-beginners',
    'vaardigheden/voedsel/noodvoorraad-recepten',
    'vaardigheden/voedsel/jagen-en-vissen',
  ];

  return (
    <Router>
      <PageMetaHandler />
      <Switch>
        <Route path="/"><HomePage /></Route>
        
        {/* Render placeholder pages for navlinks that don't have a custom page */}
        {navLinks
          .filter(link => !customNavRoutes.includes(link.href))
          .map(link => (
            <Route 
              key={link.href} 
              path={`/${link.href}`}
            >
              <PlaceholderPage title={link.label} />
            </Route>
        ))}
        
        {/* Custom route for Noodpakket and its subpages */}
        <Route path="/noodpakket"><NoodpakketPage /></Route>
        <Route 
          path="/noodpakket/samenstellen-noodpakket"
        >
          <SamenstellenNoodpakketPage />
        </Route>
        <Route 
          path="/noodpakket/voorbereiden-op-stroomuitval"
        >
          <StroomuitvalPage />
        </Route>
        <Route 
          path="/noodpakket/overstromingen-noodpakket"
        >
          <OverstromingenNoodpakketPage />
        </Route>
        <Route 
          path="/noodpakket/vluchttas"
        >
          <VluchttasPage />
        </Route>
        <Route 
          path="/noodpakket/auto-noodpakket"
        >
          <AutoNoodpakketPage />
        </Route>
        
        {/* Custom route for Vaardigheden and its subpages */}
        <Route path="/vaardigheden"><VaardighedenPage /></Route>
        <Route path="/vaardigheden/water"><WaterPillarPage /></Route>
        <Route path="/vaardigheden/water/filters-vergelijken"><FiltersVergelijkenPage /></Route>
        <Route path="/vaardigheden/water/langdurig-opslaan"><LangdurigOpslaanPage /></Route>
        <Route path="/vaardigheden/water/zuiveren-zonder-filter"><ZuiverenZonderFilterPage /></Route>
        <Route path="/vaardigheden/water/regenwater-opvangen"><RegenwaterOpvangenPage /></Route>
        <Route path="/vaardigheden/water/waterbronnen-vinden"><WaterbronnenVindenPage /></Route>
        <Route path="/vaardigheden/water/kookadvies-begrijpen"><KookadviesBegrijpenPage /></Route>

        <Route path="/vaardigheden/voedsel"><VoedselPillarPage /></Route>
        <Route path="/vaardigheden/voedsel/koken-zonder-stroom"><KokenZonderStroomPage /></Route>
        <Route path="/vaardigheden/voedsel/crisis-moestuin"><CrisisMoestuinPage /></Route>
        <Route path="/vaardigheden/voedsel/voorraadkast-checklist"><VoorraadkastChecklistPage /></Route>
        <Route path="/vaardigheden/voedsel/conserveren-voor-beginners"><ConserverenVoorBeginnersPage /></Route>
        <Route path="/vaardigheden/voedsel/noodvoorraad-recepten"><NoodvoorraadReceptenPage /></Route>
        <Route path="/vaardigheden/voedsel/jagen-en-vissen"><JagenEnVissenPage /></Route>
        
        {/* Other pages */}
        <Route path="/community"><PlaceholderPage title="Community" /></Route>
        <Route path="/over-ons"><OverOnsPage /></Route>
        <Route path="/contact"><PlaceholderPage title="Contact" /></Route>
        <Route path="/privacybeleid"><PrivacybeleidPage /></Route>
        <Route path="/disclaimer"><DisclaimerPage /></Route>
      </Switch>
      <BottomNavbar />
    </Router>
  );
};

export default App;