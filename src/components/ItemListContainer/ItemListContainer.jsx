/* eslint-disable react/prop-types */
import styles from "./ItemListContainer.module.css";
import { useState, useEffect } from "react";
import { getProducts, setProduct } from "../../utils/MockData";
import { ItemList } from "../ItemList/ItemList";
import { useFetch } from "../../hooks/useFetch";
import { Spinner } from "../spinner/Spinner";
import { usePaginate } from "../../hooks/usePaginate";

export const ItemListContainer = ({ bgBlue, greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 2;

  const {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    paginate,
    totalPagesArray,
    currentData,
  } = usePaginate(products, itemsPerPage);

  //   const url = "https://fakestoreapi.com/products";
  //   const method = "GET";
  //   const { data, loading, error } = useFetch(url, method, null);
  //   const { bgBlue, greeting } = props
  //   const bgBlue = props.bgBlue
  //   const greeting = props.greeting

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

    // setProduct().then((res) => console.log(res));
  }, []);

  const defaultTitle = "Default title";

  return (
    <main>
      <h1> {greeting ? greeting : defaultTitle} </h1>
      {loading === true ? (
        <Spinner />
      ) : (
        <div>
          <ItemList productsList={currentData} />
          <button onClick={prevPage}>prev page</button>
          {totalPagesArray.map((page) => {
            if (page < 6) {
              return (
                <button key={page} onClick={() => paginate(page)}>
                  {page}
                </button>
              );
            }
            if (page === 6) {
              return "...";
            }
            if (page === totalPages) {
              return (
                <button key={page} onClick={() => paginate(page)}>
                  {page}
                </button>
              );
            }
          })}
          <button onClick={nextPage}>next page</button>
        </div>
      )}
    </main>
  );
};
