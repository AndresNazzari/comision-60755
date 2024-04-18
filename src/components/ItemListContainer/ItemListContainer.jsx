/* eslint-disable react/prop-types */
import styles from './ItemListContainer.module.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../utils/MockData'
import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = ( { bgBlue, greeting } ) => {
    const [products, setProducts] = useState([])
    // const { bgBlue, greeting } = props
    // const bgBlue = props.bgBlue
    // const greeting = props.greeting

    useEffect(() => {
        getProducts()
            .then((res) => {
                setProducts(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const defaultTitle = "Default title"

    return (
        <main>
            <h1> { greeting ? greeting : defaultTitle } </h1>
            <div>
              <ItemList productsList={products}/>
            </div>
        </main>
    )
}
