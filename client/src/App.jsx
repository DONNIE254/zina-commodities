import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Operations from "./pages/Operations";
import Investments from "./pages/Investments";
import Mining from "./pages/Mining";
import Smelting from "./pages/Smelting";
import News from "./pages/News";
import NewsArticle from "./pages/NewsArticle";
import Contact from "./pages/Contact";
import Certificate from "./pages/Certificate";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Operations */}
        <Route
          path="/operations"
          element={<Operations />}
        />

        {/* Mining */}
        <Route
          path="/mining"
          element={<Mining />}
        />

        {/* Smelting */}
        <Route
          path="/smelting"
          element={<Smelting />}
        />

        {/* Investments */}
        <Route
          path="/investments"
          element={<Investments />}
        />

        {/* News */}
        <Route
          path="/news"
          element={<News />}
        />

        <Route
          path="/news/featured"
          element={<NewsArticle />}
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* Certificate Verification */}
        <Route
          path="/verify"
          element={<Certificate />}
        />

        {/* Admin Login */}
        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin/dashboard"
          element={<Dashboard />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;