import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './About';
import Home from './Home';
import Products from './Products';

import './App.css';

function App() {
  return (
    <main className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
