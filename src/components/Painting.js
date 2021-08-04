import React from "react";

const Painting = (props) => {
  return (
    <div>
      <img src={props.url} alt={props.title} width="480" />
      <h2>{props.title}</h2>{" "}
      {/* <p>
        Автор: <a href={painting.author.url}>{painting.author.tag}</a>{" "}
      </p>
      <p>Цена: {painting.price} кредитов</p>
      <button type="button">Добавить в корзину</button>{" "} */}
    </div>
  );
};

export default Painting;
