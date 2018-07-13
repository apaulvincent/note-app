import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './views/Home';
import About from './views/About';
import Topics from './views/Topics';
import Menu from './components/Menu';

const App = () => (
  <Router>

    <div>
      <Menu/>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />  
    </div>
</Router>
);


export default App;