/* eslint-disable react/prop-types */
import styles from './ItemListContainer.module.css'

export const ItemListContainer = ( { bgBlue, greeting } ) => {
    
    // const { bgBlue, greeting } = props

    // const bgBlue = props.bgBlue
    // const greeting = props.greeting

    const defaultTitle = "Default title"

    return (
        <main>
            <h1> { greeting ? greeting : defaultTitle } </h1>
            <div className = { bgBlue ? styles.background : styles.backgroundGreen}>
                <p> This is a paragraph </p>
                <p> This is another paragraph </p>
            </div>
        </main>
    )
}
