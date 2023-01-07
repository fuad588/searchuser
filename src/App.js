import React from "react";
import "./App.css";
import Users from "./components/Users/Users.js";
export default function App() {
  let items = []
 
    fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
      .then((response) => response.json())
      .then((data) =>{ 
        data.map((i)=>{
          items.push(i)
        })
      });

  return (
    <div className="App">
      <Users item={items} />
    </div>
  );
}
