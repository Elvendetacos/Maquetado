import Face from '../assets/Img/facebook.png'
import Twi from '../assets/Img/gorjeo.png'
import Inst from '../assets/Img/instagram.png'
import '../assets/Style/Footer.css'

function Footer() {
    return ( 
        <footer>
            <img src={Face} alt="" />
            <img src={Twi} alt="" />
            <img src={Inst} alt="" />
        </footer>
     );
}

export default Footer;