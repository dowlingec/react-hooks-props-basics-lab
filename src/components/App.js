import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import User from "../data/user";
// import userEvent from "@testing-library/user-event";
console.log(User);

function App() {
  return (
    <div>
      <NavBar />
      <Home name={User.name} city={User.city} color={User.color}/>
      <About bio={User.bio} github={User.links.github} linkedIn={User.links.linkedin}/>
    </div>
  );
}

export default App;
