import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer"

import "./App.css";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}
