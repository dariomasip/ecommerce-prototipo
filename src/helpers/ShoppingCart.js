const addItem = (item) => {
  const getShoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));

  if (!getShoppingCart) {
    console.log("Artículo agregado!");
    return localStorage.setItem("shoppingCart", JSON.stringify([item]));
  }

  const isExits = getShoppingCart.some((article) => article.id === item.id);

  if (!isExits) {
    const forArray = [...getShoppingCart];
    forArray.push(item);
    console.log("Artículo agregado!");
    return localStorage.setItem("shoppingCart", JSON.stringify(forArray));
  }

  console.warn("Ya agregaste este artículo al carro de compras!");
};

const removeItem = (item) => {};

export default { addItem, removeItem };
