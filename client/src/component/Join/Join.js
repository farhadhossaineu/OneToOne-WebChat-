import React, { useState } from "react";
import "./Join.css";
import logo from "../../images/ITBee.jpg";
import { Link } from "react-router-dom";

let user;

const Join = () => {
  const [name, setname] = useState("");

  const sendUser = () => {
    user = document.getElementById("JoinInput").value;
    document.getElementById("JoinInput").value = "";
  };

  return (
    <div>
      <div className="JoinPage">
        <div className="JoinContainer">
          <img src={logo} alt="" />
          <h1>ITBee Solution</h1>
          <input
            onChange={(e) => setname(e.target.value)}
            placeholder="Enter Your Name"
            type="text"
            id="JoinInput"
          />
          <Link
            onClick={(event) => (!name ? event.preventDefault() : null)}
            to="/chat"
          >
            {" "}
            <button onClick={sendUser} className="Joinbtn">
              Login In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
export { user };
