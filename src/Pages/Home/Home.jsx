// import { Layout } from "../../components/Layout/Layout";
// import { ItemListContainer } from "../../components/ItemListContainer/ItemListContainer";
// import { WithPermisos } from "../../hoc/WithPermisos.jsx";
import { importProductsFromMock } from "../../utils/importProducts";

export const Home = () => {
  return (
    <>
      <div>Home page</div>
      <button onClick={importProductsFromMock}>
        Agregar productos desde mocck
      </button>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
// export default WithPermisos(Home, 1);
