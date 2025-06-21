import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SearchBar from "./Components/SearchBar";
import CabinCards from "./Components/CabinCards";
import InspiredCard from "./Components/InspiredCard";
import Testimonial from "./Components/Testimonial";
import WhoWeAre from "./Components/WhoWeAre";

export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <SearchBar />
        <CabinCards />
        <InspiredCard />
        <Testimonial />
        <WhoWeAre />
      </div>
    </>
  );
}
