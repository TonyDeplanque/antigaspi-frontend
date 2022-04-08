import './App.scss';
import React from 'react';
import {Route, Routes} from 'react-router-dom'
import LoginPage from "./pages/Account/Login";
import Fridge from "./pages/Fridge";
import Navbar from "./components/Layout/Navbar";
import PrivateRoute from "./PrivateRoute";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <main className="wrapper">
                <Routes>
                    <Route exact path='/' element={<PrivateRoute><Fridge/></PrivateRoute>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
