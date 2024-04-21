import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Integrations from './components/Integrations';
import Customer from './components/Customer';
import ManageForm from './components/ManageForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Integrations />
      <Customer />
      <ManageForm />
      <Footer />
    </>
  );
}

export default App;
