import React from "react";
import Banner from "../components/Banner";
import Cinema from "../components/Cinema";
import MovieShowing from "../components/MovieShowing";
import News from "../components/News";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <MovieShowing />
      <Cinema />
      <News />
    </div>
  );
}
