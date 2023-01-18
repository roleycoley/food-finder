import { Link, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

import React, { useState } from "react";

import Home from "./components/home";
import AddReview from "./components/add-review";
import Restaurant from "./components/restaurants";
import RestaurantsList from "./components/restaurants-list";
import Login from "./components/login";

function App() {
  const [user, setUser] = useState(null);

  // default set to null
  async function login(user) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <>
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
          Home
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/restaurants" className="nav-link">
              Restaurants
            </Link>
          </li>
          <li className="nav-item">
            {user ? (
              <a
                onClick={logout}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                Logout {user.name}
              </a>
            ) : (
              <Link to="/login" className="nav-link">
                Login
              </Link>
            )}
          </li>
        </div>
      </nav>
    </div>
    <Routes>
      <Route path="/restaurants" element={<RestaurantsList />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login login={login}/>} />
      <Route path="/restaurants/:id" element={<Restaurant user={user} />} />
      <Route path="/restaurants/:id/review" element={<AddReview user={user} />} />
    </Routes>

    </>
  );
}

export default App;
