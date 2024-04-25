import { useState } from "react";

export const usePaginate = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage); // 1.5 --> 2

  const paginate = (numPage) => setCurrentPage(numPage); // poaginate me permite cambiar de pagina

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage, //posicion inicio
    currentPage * itemsPerPage //posicion final
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    } else {
      console.log("no hay mas paginas");
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    } else {
      console.log("no hay mas paginas");
    }
  };

  const totalPagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  return {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    paginate,
    totalPagesArray,
    currentData,
  };
};
