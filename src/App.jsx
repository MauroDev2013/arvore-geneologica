import Hero from "./components/Hero";
import Carousel from "./components/Carousel";

import "../style/global.css";
import "../style/card.css";

export default function App() {

  return (

    <div className="app">
      <Hero />
      <Carousel />
    </div>

  );

}