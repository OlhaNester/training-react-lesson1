import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// const link = React.createElement("a", { href: "reactjs.org" }, "Ссылка");
// console.log(link);

// reactDom.render(link, document.getElementById("root"));
// const jsxLink = <a href="reactjs.org">Ссылка</a>;
// console.log(jsxLink);

const painting = {
  id: "id-1",
  url: "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
  title: "Feather. Art abstract",
  price: 500,
  author: {
    tag: "ractopol",
    url: "https://pixabay.com/users/ractapopulous-24766/",
  },
  quantity: 25,
};

// const template = (
//   <div>
//     <img src={painting.url} alt={painting.title} width="480" />
//     <h2>{painting.title}</h2>
//     <p>
//       Автор: <a href={painting.author.url}>{painting.author.tag}</a>
//     </p>
//     <p>Цена: {painting.price} кредитов</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// );
//console.log(template);
// reactDom.render(<App />, document.getElementById("root"));
