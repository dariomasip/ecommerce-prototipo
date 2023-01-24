export const addToCart = (item) => {
  const getArticles = [JSON.parse(localStorage.getItem("myCat"))];
  const appendArticles = [...getArticles, item];
  console.log(
    "🚀 ~ file: addToCart.js:4 ~ addToCart ~ appendArticles",
    appendArticles
  );
  localStorage.setItem("articles", JSON.stringify(appendArticles));

  console.log("fdss");
};
