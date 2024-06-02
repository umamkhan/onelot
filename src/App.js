
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import Financing from './components/Financing';
import Dealership from "./components/Dealership"
import Whynot from './components/whynot/Whynot';
import Testimonial from './components/Testimonial';
import Connected from './components/Connected';
import Question from './components/FAQs/Question';
import Started from "./components/Started";
import Footer from './components/Footer';

function App() {
  return (
    <>
   <Navbar/>
   <Header/>
   <Section/>
   <Financing/>
   <Dealership/>
   <Whynot/>
   <Testimonial/>
   <Connected/>
   <Question/>
   <Started/>
   <Footer/>

   </>
  );
}

export default App;
