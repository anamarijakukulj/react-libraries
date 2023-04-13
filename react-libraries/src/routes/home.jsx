import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutUs from '../components/About-us';
import Services from '../components/Services';
import Tour from '../components/Tour';

export default function Home() {
  return (
    <>
       <Hero />
       <AboutUs />
       <Services />
       <Tour />
    </>
)}

