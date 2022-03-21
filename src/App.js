import './App.css';
import Contact from './component/Contact/Contact';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import Profil from './component/Profil/Profil';

function App() {
  return (
    <>
      <Navbar />
      <Profil />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
