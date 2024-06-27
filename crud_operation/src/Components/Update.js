import axios from "axios";
import React, { useState, useEffect } from "react";
import { navigate, useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setPassword(localStorage.getItem("password"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios.put(`https://6670e8c80900b5f8724bea6e.mockapi.io/crud-demo/${id}`, {
        name: name,
        email: email,
        password: password,

      }).then(() => {
        alert("Updated Successfully");
        navigate("/read");
      })
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-95">
        <form>
          <h1>Update</h1>

          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="Text"
              className="form-control"
              style={{ width: "400px" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              style={{ width: "400px" }}
              value={email}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleUpdate}
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
