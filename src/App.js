import './App.css';
import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import XitebHeader from './components/XitebHeader';
import WelcomeSection from './components/WelcomeSection';
import ServicesSlider from './components/ServicesSlider';
import StatsComponent from './components/StatsComponent';
import TestimonialsAndReasons from './components/TetsimonialsAndReasons';
import ClientLogos from './components/ClientLogos';
import NewsComponent from './components/NewsComponent';
import { FooterComponent } from './components/FooterComponent';

function App() {

  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={
            <>
              <XitebHeader />
              <WelcomeSection />
              <ServicesSlider />
              <StatsComponent />
              <TestimonialsAndReasons />
              <ClientLogos />
              <NewsComponent />
              <FooterComponent />
            </>
          } />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
