/* eslint-disable react/prop-types */
import { Footer } from './Footer/Footer'
import { Navbar } from './Navbar/Navbar'


export const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div>
            { children }
        </div>
        <Footer/>
    </div>
  )
}
