import { Layout } from "../../components/Layout/Layout";
import { ItemListContainer } from "../../components/ItemListContainer/ItemListContainer";
import { WithPermisos } from "../../hoc/WithPermisos.jsx";

const Home = () => {
  const itemListContainerProps = {
    greeting: "Hello, Andres, welcome to our store!",
    bgBlue: false,
  };

  return (
    <Layout>
      <ItemListContainer {...itemListContainerProps} />
    </Layout>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default WithPermisos(Home, 1);
