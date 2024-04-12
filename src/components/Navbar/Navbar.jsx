import styles from './Navbar.module.css'
import logo from '../../assets/logo.png'
import { CartWidget } from '../CartWidget/CartWidget'

export const Navbar = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="" className={styles.navbar__logo}/>
            <nav className={styles.background}>
                <ul>
                    <li>Category 1</li>
                    <li>Category 2</li>
                    <li>Category 3</li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

