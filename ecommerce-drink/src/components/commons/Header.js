import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import WithAuthNavbar from "./WithAuthNavbar";
import Navbar from "./Navbar";
import { fetchData } from "../../mixins/fetchData";

export default function Header() {
  const appState = useSelector(state => state);
  const [highlightNamePro, setPighlightNamePro] = useState(Array);
  const location = useLocation();

  useEffect(() => {
    const highlightProduct = async () => {
      const res = await fetchData("products");

      res.sort((x, y) => {
        const k = x.rating;
        const l = y.rating;
        return l - k;
      });

      if (res.length > 0) {
        const textSplit = res[0].title.split(" ");

        setPighlightNamePro(textSplit);
      }
    };

    highlightProduct();
  }, []);

  if (highlightNamePro.length === 0) {
    return null;
  }

  return (
    <>
      <header
        className="header"
        style={{ height: location.pathname === "/" ? null : "3rem" }}
      >
        <WithAuthNavbar />
        {location.pathname === "/" ? (
          <header
            className="header"
            style={{
              backgroundImage: "url(../images/slide-1-2050x898.jpg)"
            }}
          >
            <div className="header__title">{highlightNamePro[0]}</div>
            <div className="header__title-n">{`${highlightNamePro[1]} ${
              highlightNamePro[2]
            } ${highlightNamePro[3]}`}</div>
            <div className="header__title-nn">
              Since {highlightNamePro[highlightNamePro.length - 1]}
            </div>
          </header>
        ) : null}
      </header>
      {appState.users.role === 1 && location.pathname === "/" ? (<Navbar />) : appState.users.role === 0 ? (<Navbar />) : null}
    </>
  );
}
