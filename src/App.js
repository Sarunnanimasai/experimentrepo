import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import HomePage from "./pages/Homepage/homepage";
import LandingPage from "./pages/landingpage/landingpage";

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
