import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const header = { "Access-control-allow-origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios
      .post("https://6670e8c80900b5f8724bea6e.mockapi.io/crud-demo", {
        name: name,
        email: email,
        password: password,
      })
      .then(() => {
        history("/read");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-95">
      <form>
        <div className="d-flex justify-content-between m-2">
          <h1>Sign UP</h1>
          <Link to="/read">
            <button className="btn btn-primary">Show Data</button>
          </Link>
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="Text"
            className="form-control"
            style={{ width: "400px" }}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            style={{ width: "400px" }}
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="Password"
            className="form-control"
            style={{ width: "400px" }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Create;
