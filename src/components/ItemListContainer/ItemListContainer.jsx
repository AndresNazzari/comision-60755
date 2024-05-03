/* eslint-disable react/prop-types */
import styles from "./ItemListContainer.module.css";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../utils/MockData";
import { ItemList } from "../ItemList/ItemList";
import { Spinner } from "../spinner/Spinner";
import { useParams } from "react-router-dom";
// import { useFetch } from "../../hooks/useFetch";
// import { usePaginate } from "../../hooks/usePaginate";

export const ItemListContainer = ({ bgBlue, greeting }) => {
  const defaultTitle = "Default title";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { catId } = useParams();

  // const itemsPerPage = 2;
  // const {
  //   currentPage,
  //   totalPages,
  //   nextPage,
  //   prevPage,
  //   paginate,
  //   totalPagesArray,
  //   currentData,
  // } = usePaginate(products, itemsPerPage);

  //   const url = "https://fakestoreapi.com/products";
  //   const method = "GET";
  //   const { data, loading, error } = useFetch(url, method, null);
  //   const { bgBlue, greeting } = props
  //   const bgBlue = props.bgBlue
  //   const greeting = props.greeting

  useEffect(() => {
    setLoading(true);

    if (catId) {
      getProductsByCategory(catId).then((res) => {
        setProducts(res);
        setLoading(false);
      });
    } else {
      getProducts()
        .then((res) => {
          setProducts(res);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [catId]);

  return (
    <main>
      <h1> {greeting ? greeting : defaultTitle} </h1>
      {loading === true ? (
        <Spinner />
      ) : (
        <div>
          <ItemList productsList={products} />
          {/* <button onClick={prevPage}>prev page</button>
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
          */}
        </div>
      )}
    </main>
  );
};
