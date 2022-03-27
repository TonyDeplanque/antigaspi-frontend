import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from "./pages/Account/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>NAV</nav>
      </header>
        <main className="container">
            <Routes>
                <Route path="/login" element={<LoginPage/>} />
            </Routes>
        </main>
    </div>
  );
}

export default App;
