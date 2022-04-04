import './App.scss';
import {Route, Routes} from 'react-router-dom'
import LoginPage from "./pages/Account/Login";
import Fridge from "./pages/Fridge";
import React from "react";
import Navbar from "./components/Layout/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <main className="wrapper">
            <Routes>
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/fridge" element={<Fridge/>} />
            </Routes>
        </main>
    </div>
  );
}

export default App;
