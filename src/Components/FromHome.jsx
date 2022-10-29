import '../assets/Style/FromHome.css'
import IMG from '../assets/Img/consultorio.png'
import IMG11 from '../assets/Img/consultorio-medico.jpg'
import IMG12 from '../assets/Img/medicos-a-domicilio.webp'
import IMG2 from '../assets/Img/5 (2).png'
import IMG3 from '../assets/Img/6 (2).png'
import IMG4 from '../assets/Img/7 (2).png'

function FromHome() {
    return (
        <>
        <div className="slider-div">
            <div className='slider'>
                <div className='slider-s'>
                <ul>
                    <li><img src={IMG} alt="" /></li>
                    <li><img src={IMG11} alt="" /></li>
                    <li><img src={IMG12} alt="" /></li>
                </ul>
                </div>
            </div>
        </div>
        <div className="contenido">
            <div className='part1'>
                <div className='medicos'>
                    <div className='tipo'>
                        <p>MEDICO GENERAL</p>
                    </div>
                    <img src={IMG2} alt="" />
                </div>
                <div className='medicos'>
                    <div className='tipo'>
                        <p>PEDIATRA</p>
                    </div>
                    <img src={IMG3} alt="" />
                </div>
                <div className='medicos'>
                    <div className='tipo'>
                        <p>DENTISTA</p>
                    </div>
                    <img src={IMG4} alt="" />
                </div>
            </div>
            <div className='part2'>
                <p className='titulo'>¿SABIAS QUE?</p>
                <p className='desc'>El 23% de personas no acuden a especialistas por lo que no pueden tener un acceso a la salud de esta manera, no seas uno más, DocNear esta para ti.</p>
            </div>
        </div>
        </>
     );
}

export default FromHome;