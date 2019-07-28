import React, { createContext, useState, useEffect } from "react";

const axios = require("axios");
const PortfolioContext = createContext();

const PortfolioContextProvider = ({ children }) => {
  const [githubData, setGithubData] = useState({});
  const [repoData, setRepoData] = useState([]);


  const fetchLimlight = async () => {
    let { data } = await axios.get(`https://api.github.com/users/Limlight86`);
    setGithubData(data);
    console.log(data)
  };

  const fetchRepos = async () => {
    let { data } = await axios.get(`https://api.github.com/users/Limlight86/repos`);
    setRepoData(data);
    console.log(data)
  }

  useEffect(() => {
    fetchLimlight();
    fetchRepos()
  }, []);

  return (
    <PortfolioContext.Provider value={{ githubData, repoData }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioContext, PortfolioContextProvider };
