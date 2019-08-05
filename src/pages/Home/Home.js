import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import styles from "./Home.module.css";
import { PortfolioContext } from "../../context/PortfolioContext";
import { Navigation, SocialLinks, Technologies, FeaturedProjects, ResumeButton, Footer } from "../../components/";

const Home = ({ match }) => {
  const { githubData } = useContext(PortfolioContext);
  const { avatar_url } = githubData;

  return (
    <div className={styles.home}>
      <Navigation currentPath={match.path} />
      <div className={styles.header}>
      <div className={styles.headerLeft}>
        <span className={styles.hello}>Hello World!</span>
        <p>Full-Stack Web Developer, Lazaro Quintana</p>
        <SocialLinks />
        <ResumeButton />
      </div>
      <img className={styles.avatar} src={avatar_url} alt="Limlight86" />
    </div>
      <p>
        I am a junior full-stack web developer, recipient of the Spirit of&nbsp;
        <a href="https://wyncode.co/" target="blank">Wyncode</a> award for Cohort 33.
      </p>
      <Technologies/>
      <FeaturedProjects/>
      <h2>
        Thank you for visiting! Please visit my <Link to={`/about`}>About</Link> me page for more of my story.
      </h2>
      <h2>Please visit my <Link to={`/projects`}>Projects</Link> page to see my GitHub repositories.</h2>
      <h2><Link to={`/contact`}>Leave me a message</Link> and I will get back to you ASAP.</h2>
      <Footer/>
    </div>
  );
};

export default Home;
