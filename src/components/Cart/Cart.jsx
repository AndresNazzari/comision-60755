import Table from "react-bootstrap/Table";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import { db } from "../../firebase/dbConnection";
import { addDoc, collection } from "firebase/firestore";
import { set } from "firebase/database";

export const Cart = () => {
  const { cart, totalPrice, removeItem, clearCart } = useCartContext(); //cart es un array de productos en el carrito
  const [formData, setFormData] = useState({ name: "", tel: "", email: "" });

  const handleRemoveItem = (id, price, qty) => {
    removeItem(id, price, qty);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleSaveCart = () => {
    console.log("Saving in Database");
    console.log("formData", formData);
    console.log("cart", cart);

    const ordersCollection = collection(db, "orders");
    const newOrder = {
      buyer: formData,
      items: cart,
      date: new Date(),
      total: totalPrice,
    };
    addDoc(ordersCollection, newOrder)
      .then((doc) => {
        alert("Compra realizada con éxito, su número de orden es: " + doc.id);
        console.log(doc);
        clearCart();
        setFormData({ name: "", tel: "", email: "" });
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map(({ id, name, price, qty }, index) => {
            return (
              <tr key={index}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{qty}</td>
                <td>
                  <button onClick={() => handleRemoveItem(id, price, qty)}>
                    Remove Item
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={4}>Total price</td>
            <td> $ {totalPrice}</td>
          </tr>
        </tbody>
      </Table>
      <button onClick={handleClearCart}>Clear Cart</button>

      <input
        type="text"
        name="name"
        id="name"
        placeholder="Ingrese nombre"
        onChange={(e) => handleOnChange(e)}
      />
      <input
        type="number"
        name="tel"
        id="tel"
        placeholder="Ingrese telefono"
        onChange={(e) => handleOnChange(e)}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Ingrese email"
        onChange={(e) => handleOnChange(e)}
      />
      <button onClick={handleSaveCart}>Finalizar Compra</button>
    </>
  );
};
