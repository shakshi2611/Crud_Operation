import Create from "./Components/Create";
import Read from "./Components/Read";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route exact path="/read" element={<Read />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
