import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.scss"

function App() {
  return (
    <div className="app">
      <div className="container">
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  path='/' exact element={<Home />} />
          <Route  path="/post/:id" exact element={<Single />} />
          <Route  path="/write" exact element={<Write />} />
          <Route  path="/register" exact element={<Register />} />
          <Route  path="/login" exact element={<Login />} />
        </Routes>
        <Footer />
        </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
