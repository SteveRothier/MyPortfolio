import './App.css';
import Navbar from './component/Navbar/Navbar';
import Profil from './component/Profil/Profil';
import Competence from './component/Competence/Competence';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import NewsList from './component/New/NewsList';

function App() {
  return (
    <>
      <Navbar />
      <Profil />
      <NewsList />
      <Competence />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
