import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Grades from "./Components/Grades";
import Shop from "./Components/Shop";
import Counter from "./Components/Counter";
import Rent from "./Components/Rent";
import Triangle from "./Components/Triangle";
import Election from "./Components/Election";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <About />
            <Footer />
          </>
        }
      />
      <Route
        path="/grades"
        element={
          <>
            <Navbar />
            <Grades score={40} total={100} />
            <Footer />
          </>
        }
      />
      <Route
        path="/shop"
        element={
          <>
            <Navbar />
            <Shop />
            <Footer />
          </>
        }
      />
      <Route
        path="/counter"
        element={
          <>
            <Navbar />
            <Counter />
            <Footer />
          </>
        }
      />
      <Route
        path="/rent"
        element={
          <>
            <Navbar />
            <Rent />
            <Footer />
          </>
        }
      />
      <Route
        path="/triangle"
        element={
          <>
            <Navbar />
            <Triangle />
            <Footer />
          </>
        }
      />
      <Route
        path="/election"
        element={
          <>
            <Election />
          </>
        }
      />
    </Routes>
  );
}

export default App;
