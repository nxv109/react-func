import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { fetchData } from '../../mixins/fetchData';

export default function Navbar() {
  const [ data, setData ] = useState(Array);
  const { t } = useTranslation();

  useEffect(() => {
    setData(Object.entries(fetchData("categories")));

  }, []);

  if (!data) {
    return null;
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar__nav container">
          <ul className="navbar__nav__menu">
            <li className="navbar__nav__menu__items"><Link to="/"><img src="http://localhost:3000/images/Logo.png" alt="logo" /></Link></li>
            <li className="navbar__nav__menu__items"><a href="#0">{t("Home").toUpperCase()}</a>
            </li>
            <li className="navbar__nav__menu__items"><a href="#0">{t("Red wine").toUpperCase()}</a>
              <ul className="navbar__nav__menu__second">
                <div className="navbar__nav__menu__second-b">
                  {data.map((item, index) => (
                    <div key={index} className="navbar__nav__menu__second-b-items">
                      <div className="navbar__nav__menu__title-second-b-items">{t(item[0]).toUpperCase()}</div>
                      {item[1].map((subItem, subIndex) => (
                        <li key={subIndex} className="navbar__nav__menu__sc-items"><a href="#0">{t(subItem)}</a></li>
                      ))}
                    </div>
                  ))}
                </div>
              </ul>
            </li>
            <li className="navbar__nav__menu__items"><a href="#0">{t("White wine").toUpperCase()}</a>
              <ul className="navbar__nav__menu__second">
                <div className="navbar__nav__menu__second-b">
                  {data.map((item, index) => (
                    <div key={index} className="navbar__nav__menu__second-b-items">
                      <div className="navbar__nav__menu__title-second-b-items">{t(item[0]).toUpperCase()}</div>
                      {item[1].map((subItem, subIndex) => (
                        <li key={subIndex} className="navbar__nav__menu__sc-items"><a href="#0">{t(subItem)}</a></li>
                      ))}
                    </div>
                  ))}
                </div>
              </ul>
            </li>
            <li className="navbar__nav__menu__items"><a href="#0">{t("Champagne").toUpperCase()}</a>
            </li>
            <li className="navbar__nav__menu__items"><a href="#0">{t("About us").toUpperCase()}</a>
            </li>
            <li className="navbar__nav__menu__items"><a href="#0">BLOG</a>
            </li>
            <li className="navbar__nav__menu__items"><a href="#0">{t("Contact").toUpperCase()}</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
