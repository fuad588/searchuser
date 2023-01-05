import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import React, { useEffect, useState } from "react";
import "./Users.css";

function Users() {
  const [myApi, setMyapi] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood"
      );
      res.json().then((res) => setMyapi(res));
    }

    fetchData();
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const options = [];
  myApi.map((item) => options.push(item.department));

  return (
    <div className="app">
      <input onChange={handleChange} />
      <Dropdown options={options}  placeholder="Name" />
      {myApi.map((item) =>
        item.name.includes(text) ? (
          <div key={item.id} className="names">
            {item.name}
          </div>
        ) : null
      )}
    </div>
  );
}

export default Users;
