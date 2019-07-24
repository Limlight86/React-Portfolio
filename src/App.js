import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home, About, Projects, Contact } from './pages'
import { Navigation } from './components'
import { Layout } from './containers'

const App = () => (
  <BrowserRouter>
  <Layout>
    <Navigation/>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Layout>
  </BrowserRouter>
);

export default App;
