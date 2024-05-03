import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../utils/MockData.js";
import { Spinner } from "../spinner/Spinner.jsx";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { prodId } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(prodId)
      .then((res) => {
        setProduct(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [prodId]);

  return loading === true ? (
    <Spinner />
  ) : (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};
