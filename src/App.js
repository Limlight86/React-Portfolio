import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home, About, Projects, Contact } from "./pages";
import { Layout } from "./containers";
import { PortfolioContextProvider } from "./context/PortfolioContext";
import ScrollToTop from './hoc/ScrollToTop'

const App = () => (
  <BrowserRouter>
    <PortfolioContextProvider>
      <ScrollToTop>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Layout>
      </ScrollToTop>
    </PortfolioContextProvider>
  </BrowserRouter>
);

export default App;
