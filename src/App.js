import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Header />
      {/* <Login /> */}
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
