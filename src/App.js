import './App.css';
import Navbar from './component/Navbar/Navbar';
import Profil from './component/Profil/Profil';
import Competence from './component/Competence/Competence';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Profil />
      <Competence />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
