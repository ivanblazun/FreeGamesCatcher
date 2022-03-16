import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Header from './layout/Header';
import Home from './home/Home';
import About from './layout/About';

function App() {
  return (
    <Router>
      <div className="App ani">
        <Header />
        <Home />
        <Switch>
          <Route exact path='/about' component={About} />
        </Switch>
      </div>

    </Router>
  );
}

export default App;
