import { Layout } from "../../components/Layout/Layout"
import { ItemListContainer } from "../../components/ItemListContainer/ItemListContainer"

export const Home = () => {
    const itemListContainerProps = {
        greeting: "Hello, Andres, welcome to our store!",
        bgBlue: false
      }

  return (
    <Layout>
        <ItemListContainer { ...itemListContainerProps}/>
    </Layout>
  )
}
