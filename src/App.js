import React from 'react';
import About from './About';
import Nav from './Nav';
import Shop from './Shop';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemDetail from './ItemDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default App;
