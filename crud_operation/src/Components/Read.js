import axios from "axios";
import React, { useState, useEffect } from "react";

const Read = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://6670e8c80900b5f8724bea6e.mockapi.io/crud-demo")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>Read Operation</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>{eachData.password}</td>
                  <td>
                    <button className="btn-success">Edit</button>
                  </td>
                  <td>
                    <button className="btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
