import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Team from "./Pages/Team";
import Footer from "./Pages/Footer";
import BookingPage from "./Pages/BookingPage";
import ServicesPage from "./Pages/ServicesPage";
import AdminPage from "./Pages/AdminPage";
import LoginPage from "./Pages/LoginPage";
import Test from "./Pages/Test";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary fallback={<p>Something went wrong. Try again later.</p>}>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/teamSection" element={<Team />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/bookingPage" element={<BookingPage />} />
          <Route path="/servicesPage" element={<ServicesPage />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/adminPage" element={<AdminPage />} />
          <Route path="/bookingPage" element={<BookingPage />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
