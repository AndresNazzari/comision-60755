import { useState } from "react";

export const ItemCount = ({ stock }) => {
  const [cantItems, setCantItems] = useState(0);

  const handlleAdd = () => {
    setCantItems(cantItems + 1);
  };
  const handlleSubs = () => {
    if (cantItems > 0) {
      setCantItems(cantItems - 1);
    }
    // if (cantItems > 0) setCantItems(cantItems - 1)
    // cantItems > 0 ? setCantItems(cantItems - 1) : alert('No se puede restar')
    // cantItems > 0 && setCantItems(cantItems - 1)
  };

  const handlleAddToCart = () => {
    console.log(`Se agregaron ${cantItems} al carrito`);
  };

  return (
    <>
      <div>ItemCount</div>
      <div>
        <button onClick={handlleAdd}> + </button>
        <span> {cantItems} </span>
        <button onClick={handlleSubs}> - </button>
      </div>
      <button onClick={handlleAddToCart}> Agregar al carrito </button>
    </>
  );
};
