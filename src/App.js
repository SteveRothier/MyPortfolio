import './App.css';
import LeftNavbar from './component/LeftNavbar/LeftNavbar';
import Profil from './component/Profil/Profil';
import Competence from './component/Competence/Competence';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import NewsList from './component/New/NewsList';
import ProjectsList from './component/Project/ProjectsList';

function App() {
  return (
    <>
      <LeftNavbar />
      <Profil />
      <NewsList />
      <ProjectsList />
      <Competence />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
