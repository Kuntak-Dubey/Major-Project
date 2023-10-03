// import logo from './logo.svg';
import "./App.css";
import Navbar from "./nav";
import Wave from "./bgwave";
import "./wave.css";
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cards] = useState([
    {
      title: "Quizes",
      text: "Find all your college quizes here !",
    },
    {
      title: "Notes",
      text: "Access the notes for better academic progress",
    },
    {
      title: "Discussion Forum",
      text: "Share your questions and doubt with out teachers",
    },
    {
      title: "Updates",
      text: "Important notices and upcoming events",
    },
  ]);

  return (
    <>
      <Wave />

      <div className="App">
        <section>
          <Navbar />
          <div className="container">
            <h1>Why are we here ?</h1>
            <p>
              To resolve all your troubles of bouncing from one app to another !
            </p>
            <p>
              And to help you find everything you need for smoother college
              experience.
            </p>
            <h1>Features</h1>
            <div className="cards">
              {cards.map((card, i) => (
                <div key={i} className="card">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <button className="btnn">Explore</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
