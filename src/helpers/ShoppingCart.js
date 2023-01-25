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

  let forArray = [...getShoppingCart];
  const indexElement = forArray.findIndex((element) => element.id === item.id);

  forArray[indexElement].cantidad++;
  return localStorage.setItem("shoppingCart", JSON.stringify(forArray));
};

const removeItem = (item) => {
  const getShoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));

  const indexElement = getShoppingCart.findIndex(
    (element) => element.id === item.id
  );

  const forArray = [...getShoppingCart];

  forArray.splice(indexElement, 1);

  console.log("¡Artículo eliminado del carrito!");
  return localStorage.setItem("shoppingCart", JSON.stringify(forArray));
};

export default { addItem, removeItem };
