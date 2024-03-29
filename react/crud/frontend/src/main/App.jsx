import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

import Logo from "../components/template/Logo";
import Nav from "../components/template/Nav";
import Footer from "../components/template/Footer";
import Home from "../components/home/Home";

export default function App(props) {
  return (
    <div className="app">
      <Logo />
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}
