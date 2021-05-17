import React from "react";
import { Link } from "react-router-dom";

const styles ={
  navbar: {
    width: '200%',
    maxWidth: '200%'
  },
}

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style={styles.navbar}>
      <div class="container-fluid">
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" class="nav-link" >Home</Link>
            </li>
            <li class="nav-item">
                <Link to="/todos" class="nav-link" >Todos</Link>
            </li>
            <li class="nav-item">
                <Link to="/users" class="nav-link" >Users</Link>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
