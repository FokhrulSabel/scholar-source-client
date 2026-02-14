import React from "react";
import Banner from "../../components/HomeContainer/Banner/Banner";
import TopScholarships from "../../components/HomeContainer/TopScholarships/TopScholarships";
import SuccessStories from "../../components/HomeContainer/SuccessStories/SuccessStories";
import Statistics from "../../components/HomeContainer/Statistics/Statistics";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TopScholarships></TopScholarships>
      <SuccessStories></SuccessStories>
      <Statistics></Statistics>
    </div>
  );
};

export default Home;
