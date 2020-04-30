import React from "react";
import { Home, Contact, About, Blog } from "./components/pages";
import Container from "../src/containers";
import Navbar from "../src/components/commons/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Store from "./Store";

export default function App() {
  return (
    <Store>
      <Router>
        <Container>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Container>
      </Router>
    </Store>
  );
}

