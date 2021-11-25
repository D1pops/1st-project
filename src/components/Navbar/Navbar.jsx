import React from "react";
import N from './Navbar.module.css'

const Navbar = () => {
    return (
      <nav className={N.nav}>
      <div className={`${N.ct} ${N.active}`}>
        <a>Profile</a>
      </div>
      <div className={N.ct}>
        <a>Messages</a>
      </div>
      <div className={N.ct}>
        <a>News</a>
      </div>
      <div className={N.ct}>
        <a>Music</a>
      </div>
      <div className={N.ct}>
        <a>Settings</a>
      </div>
    </nav>
    );
}
export default Navbar;