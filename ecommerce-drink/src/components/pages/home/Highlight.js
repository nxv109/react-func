import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMessage } from "../../../actions/message.action";
import { closeMessage } from "../../closeMessage";
import { useTranslation } from "react-i18next";
import { urlPretty } from "../../../mixins/urlPretty";
import { sortDataDesc } from "../../../mixins/fetchData";
import { addToCart } from "../../addToCart";

export default function Introduce() {
  const [ product, setProduct ] = useState(Object);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await sortDataDesc("products", {}, "rating", 1);

      setProduct(res[0]);
    };

    fetchData();
  }, []);

  if (Object.entries(product).length === 0) return null;

  const handleAddToCart = (e, id) => {
    e.preventDefault();
    const msgAddToCart = addToCart(id);

    msgAddToCart.then(res => {
      dispatch(setMessage(res));
      dispatch(closeMessage(""));
    });
  };

  return (
    <section className="highlight">
      <div
        className="highlight__high container"
        style={{
          backgroundImage: "url(./images/wine-63931_12802-1240x829.jpg)"
        }}
      >
        <div className="highlight__high__pro">
          <div className="highlight__high__pro__photo">
            <img
              src={
                product
                  ? `./images/${product.images[0]}`
                  : ""
              }
              alt=""
            />
          </div>
          <div className="highlight__high__pro__info">
            <div className="main-title-tl">
              <h1 className="main-title-tl__tt">
                {product ? (
                  <Link to={`/p/${urlPretty(product.title)}/${product.id}`}>{product.title}</Link>
                ) : ""}
              </h1>
              <span className="highlight__high__pro__info__title__eff">
                <img src="./images/titleleft-dark.png" alt="" />
              </span>
            </div>
            <div className="highlight__high__pro__info__price">
              {product ? product.price : ""}
            </div>
            <button onClick={e => handleAddToCart(e, product.id)} className="highlight__high__pro__info__add-to-card">
              {t("Add to cart").toUpperCase()}
            </button>
            <div className="highlight__high__pro__info__descriptions">
              A beam of pure blackberry runs through this otherwise dense and
              focused red.A beam of pure blackberry runs through this otherwise
              dense and focused red.
            </div>
            <div className="highlight__high__pro__info__time">
              <table>
                <tbody>
                  <tr>
                    <td>
                      334
                      <p>{t("Days").toUpperCase()}</p>
                    </td>
                    <td>
                      26
                      <p>{t("Hours").toUpperCase()}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      60
                      <p>{t("Minutes").toUpperCase()}</p>
                    </td>
                    <td>
                      15
                      <p>{t("Seconds").toUpperCase()}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
