import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only"></span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link to="/login">Login</Link>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div>
        <img
          src="./img/za_first_image.jpg"
          alt=""
          style={{ alignSelf: "center", width: "100%" }}
        />
      </div>
    </div>
  );
}

export default Home;
