import './App.scss';
import {Route, Routes} from 'react-router-dom'
import LoginPage from "./pages/Account/Login";
import Fridge from "./pages/Fridge";

function App() {
  return (
    <div className="App">
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
