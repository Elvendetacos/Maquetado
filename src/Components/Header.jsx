import '../assets/Style/Headers.css'
import Search from '../assets/Img/busqueda.png'
import IMG1 from '../assets/Img/1 (2).png'
import IMG2 from '../assets/Img/menu.png'

function Header({children}) {
    return ( 
        <header>
            <div className='contenedor'>
                <img src={IMG1} alt="" />
            </div>
            <div className='contenedor2'>
                <div className='search'>
                <input type="text" />
                <img src={Search} alt="" />
                </div>
            </div>
            <div className='contenedor3'>
                <img src={IMG2} alt="" />
            </div>
        </header>
     );
}

export default Header;