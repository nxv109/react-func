import moment from "moment";
import {
  addData,
  updateData,
  fetchProductOfCart,
  fetchData
} from ".././mixins/fetchData";

const timeNow = moment().format();

export const addToCart = async (id) => {
  let messageSucess;
  const userExist = JSON.parse(sessionStorage.getItem("users"));

  if (userExist) {
    const getPro = await fetchData("products", { id: id });
    const getInfoPro = {
      id:
        "_" +
        Math.random()
          .toString(36)
          .substr(2, 9),
      productId: getPro.id,
      title: getPro.title,
      image: getPro.images[0],
      price: getPro.price,
      choosedColor: getPro.colors[0],
      colors: getPro.colors,
      choosedSize: getPro.sizes[1],
      sizes: getPro.sizes,
      amount: +getPro.amount || 1,
      userId: userExist.id,
      createDate: moment(timeNow).format("DD-MM-YYYY HH:mm")
    };

    const userId = await userExist.id;
    const getCart = await fetchProductOfCart("cart", { userId: userId });
    const checkProExist = getCart.find(v => v.productId === +getPro.id);

    if (checkProExist) {
      const confirmAddToCart = window.confirm(
        "This product already exists in the basket, do you want to increase the quantity?"
      );
      if (confirmAddToCart) {
        updateData(
          "cart",
          { id: checkProExist.id },
          { amount: +checkProExist.amount + 1 }
        );
        messageSucess = msgSs();
      }
    } else {
      addData("cart", getInfoPro);
      messageSucess = msgSs();
    }

    function msgSs() {
      return "Thêm vào giỏ hàng thành công";
    }
  } else {
    messageSucess = "Đăng nhập để thêm vào giỏ";
  }

  return messageSucess;
};
