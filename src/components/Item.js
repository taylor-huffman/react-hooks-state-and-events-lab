import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(true)
  const cartItemClass = inCart ? "" : "in-cart"
  const addToCartButtonClass = inCart ? "add" : "remove"

  function addToCartHandler() {
    setInCart((inCart) => !inCart)
  }

  return (
    <li className={cartItemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addToCartButtonClass} onClick={addToCartHandler}>{inCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
