import React, { useState, useEffect, useRef } from "react";
import "../styles/menu.scss";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min.js";
import { Link } from "react-router-dom";

function Menu() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x140707,
          backgroundColor: 0x0,
          maxDistance: 27.0,
          points: 6.0,
          spacing: 14.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className="menu-container" ref={myRef}>
      <div class="all">
        {" "}
        <div class="lefter">
          <Link to="/uiux">
            <div class="text">UI/UX</div>{" "}
          </Link>
        </div>
        <div class="left">
          <div class="text">Branding</div>
        </div>
        <div class="center">
          <div class="explainer">
            <span>Hover me</span>
          </div>
          <div class="text">Advertising</div>
        </div>
        <div class="right">
          <div class="text">Product Visualization</div>
        </div>
        <div class="righter">
          <div class="text">Motion Design</div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
