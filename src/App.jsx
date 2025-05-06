import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import { GlobalProvider } from "./context/GlobalContext";
import Header from "./components/Header";
import ExchangeRates from "./components/ExchangeRates";


function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exchange" element={<ExchangeRates />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
