import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setMessage } from "../../../actions/message.action";
import { closeMessage } from "../../closeMessage";
import { addToCart } from "../../addToCart";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { urlPretty } from "../../../mixins/urlPretty";
import { sortDataDesc } from "../../../mixins/fetchData";

export default function InterestedProduct() {
  const [products, setProducts] = useState(Array);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await sortDataDesc("products", {}, "rating", 4);

      setProducts(res);
    };

    fetchData();
  }, []);

  if (products.length === 0) return null;

  const handleAddToCart = (e, id) => {
    e.preventDefault();
    const msgAddToCart = addToCart(id);

    msgAddToCart.then(res => {
      dispatch(setMessage(res));
      dispatch(closeMessage(""));
    });
  };

  return (
    <section className="new-product">
      <div className="product container">
        <div className="main-title-tl">
          <div className="main-title-tl__tt">
            {t("Interested product").toUpperCase()}
          </div>
          <div className="main-title-tl__eff">
            <img src="./images/title-dark.png" alt="" />
          </div>
        </div>
        <div className="product__pro">
          <div className="product__box-pro1">
            {products.map((item, index) => (
              <div key={index} className="product__items">
                <Link to={`/p/${urlPretty(item.title)}/${item.id}`}>
                  <div className="product__photo">
                    <img src={`./images/${item.images[0]}`} alt="" />
                  </div>
                  <div className="product__title">{item.title}</div>
                  <div className="product__price">
                    <span className="product__price-sale">{item.price}</span>
                    <span> - </span>
                    <span className="product__price-not-sale">
                      <strike>650.000</strike>
                    </span>
                  </div>
                </Link>
                <button
                  onClick={e => handleAddToCart(e, item.id)}
                  className="product__add-to-cart"
                >
                  {t("Add to cart").toUpperCase()}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
