import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min.js";
import "../styles/home.css";
import { Link } from "react-router-dom";
import Logo from "../assets/logonomad.png";
import Sun from "../assets/sunwhite.png";
import Moon from "../assets/moonblack.png";

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

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
          // color: 0x2d0101,
          color: darkMode ? 0x2d0101 : 0xffebeb,
          backgroundColor: darkMode ? 0x0 : 0xffffff,
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

  useEffect(() => {
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
        // color: 0x2d0101,
        color: darkMode ? 0x2d0101 : 0xffebeb,
        backgroundColor: darkMode ? 0x0 : 0xffffff,
        maxDistance: 27.0,
        points: 6.0,
        spacing: 14.0,
      })
    );
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [darkMode]);

  return (
    <div
      className={darkMode ? "dark-mode" : "light-mode"}
      style={{ height: "100vh", width: "100%", overflow: "hidden" }}
      ref={myRef} 
    >
      <div className="w-24">
        <img src={Logo} alt="" />
      </div>
      <div className="w-full h-[90vh] top-[90px] cur">
        <div className="w-full h-[90%] flex flex-col justify-center items-center  px-4 text-center">
          <p className="text-xl pt-4 pb-40 home_text">
            Start your <span className="home_text_journey">journey</span> with
            the
            <span className="home_text_nomad">
              <Link to="/menu">Nomad...</Link>
            </span>
          </p>
        </div>

        <div className="container">
          <div
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          >
            {darkMode ? (
              <div>
                <img src={Sun} alt="" />
              </div>
            ) : (
              <div>
                <img src={Moon} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
