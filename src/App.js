import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './page/Home/Home';
import Portfolio from './page/Portfolio/Portfolio';

function App() {
  return (
    <>
      <Router>    
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/portfolio" component={Portfolio}/>
          </Switch>
      </Router>
    </>

  );
}

export default App;
