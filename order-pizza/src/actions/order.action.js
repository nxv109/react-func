const addProduct = data => ({
  type: 'ADD',
  payload: data
});

export const resetProduct = () => ({
  type: "RESET",
  payload: []
});

export const getProduct = (product, listProducts, amount) => {
  return async dispatch => {
    const productExist = listProducts.findIndex(item => item.id === product.id);

    if (productExist !== -1) {
      listProducts.forEach(item => {
        if (item.id === product.id) {
          item.amount = amount;
        }
      });
    } else {
      listProducts.push(product)
    }

    dispatch(addProduct(listProducts));
  }
};
