import React from "react";
import { PageTitle } from "../../components/common/PageTitle";
import { TvList } from "../../components/HomePage/TvList";
import { useGetScheduled } from "../../hooks/useGetScheduled";
import "./styles.css";

function HomePage() {
  const { scheduled, isLoading } = useGetScheduled();

  return (
    <div className="home-page-container">
      <div className="header">
        <PageTitle title="TV Bland" />
        <p className="sub-title">
          TV Show and web series database.{"\n"} Create personalised
          schedules.Episode guide, cast, crew and character information
        </p>
      </div>
      <div className="home-page-content">
        {isLoading ? <p>Loading...</p> : <TvList scheduled={scheduled} />}
      </div>
    </div>
  );
}

export default HomePage;
