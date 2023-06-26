import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MiddleComponent from "./components/MiddleComponent";
import Card from "./components/Card.jsx";
import data from "../src/data";

function App() {
  const [count, setCount] = useState(0);
  const CardData = data.map(function (data) {
    return (
      <Card
        // this is the very simple method to pass the props but it
        // not feasible when there are many keys
        // img={data.coverImg}
        // rating={data.stats.rating}
        // title={data.title}
        // reviewCount={data.stats.reviewCount}
        // country={data.location}
        // price={data.price}

        //best way to pass props
        {...data}
      />
    );
  });

  return (
    <>
      <Navbar />
      <MiddleComponent />
      <div className="card-outer">{CardData}</div>
    </>
  );
}

export default App;
