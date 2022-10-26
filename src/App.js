import React from "react";

let isLoggedIn = true;

function renderConditionally() {
  if (isLoggedIn === true) {
    return <h1>Hello</h1>;
  }
}

function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
