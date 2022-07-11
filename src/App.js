import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Products from "./pages/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  const routeData = [
    {
      path: "products",
      element: (
        <ProtectedRoute>
          <Products />
        </ProtectedRoute>
      ),
    },
    { path: "about", element: <About /> },
    { path: "events", element: <h1>Events</h1> },
    { path: "bestdeals", element: <h1>Best Deals</h1> },
  ];

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Login />} />
        {routeData.map((theRoute, position) => (
          <Route
            key={position}
            path={theRoute.path}
            element={theRoute.element}
          />
        ))}
      </Routes>
      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
