import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ItemCount = ({ stock, initial, handlleAddToCart }) => {
  const navigate = useNavigate();
  const [cantItems, setCantItems] = useState(0);
  const [pordAgregado, setProdAgregado] = useState(false);

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

  const handleTerminarCompra = () => {
    setProdAgregado(false);
    navigate("/cart");
  };

  const handleAgregarAlCarrito = () => {
    setProdAgregado(true);
    handlleAddToCart(cantItems);
  };

  return (
    <>
      <div>ItemCount</div>
      <div>
        <button onClick={handlleAdd}> + </button>
        <span> {cantItems} </span>
        <button onClick={handlleSubs}> - </button>
      </div>

      {pordAgregado ? (
        <button onClick={handleTerminarCompra}> Terminar Compra </button>
      ) : (
        <button onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
      )}
    </>
  );
};
