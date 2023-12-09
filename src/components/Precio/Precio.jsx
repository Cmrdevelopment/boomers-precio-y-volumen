import "./Precio.css";
import { FaCheck } from "react-icons/fa"

const handleTallerClick = () => {
  window.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VX7WDXDPMVYBE';
};

const handleButtonTallerClick = () => {
  window.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VX7WDXDPMVYBE';
};



const Precio = () => {

  const twitterURL = 'https://twitter.com/bison_trade';

    return (
        <>
        <div className="mt-16">
            <div className="pl-3 pr-3 font-bold text-center mt-5">
            <h1 className="sm:text-6xl font-extrabold">¿Y cuanto cuesta?</h1>
            <div className="m-5">
            <p>Si eres alumno de los boomers o has estado en algún boomers anterior contacta con tú boomers </p>
           
            </div>
            </div>
        </div>
        <div className="LandingPrecio_container_general">
            
          <button className="LandingPrecio_container_tablas" onClick={handleTallerClick}>
            <div className="LandingPrecio_titulo_y_precio">
              <div className="">
                  <h1 className="flex justify-center items-center font-bold">Taller MADRID</h1>
                  <h5 className="">Boomers</h5>
                  <h2 className="LandingPrecio_precio font-bold">445 €</h2>
              </div>
              <div className="LandingPrecio_info_taller">
              <h3><FaCheck/>3 días, talleres de 4 horas c/u</h3>
              <h3><FaCheck/>Más de 20 horas formativas</h3>
                  <h3><FaCheck/>Operativa real el lunes</h3>                
                  <button className="boton_reserva" onClick={handleButtonTallerClick}>Reservo PLAZA</button>
              </div>
            </div>
          </button>
        </div>
        <div className="flex justify-center items-center text-center m-5">
                <p>Una vez hagas la reserva recibirás un email con toda la info y un enlace para entrar en el TELEGRAM privado del EVENTO, así estarás informado de todo el evento</p>        
                </div>
                <div className="flex flex-col justify-center items-center">
                <h3 className="m-5 font-bold">Patrocinado por:</h3>
                <section className="sm:w-2/12 w-3/4">          
                <a href={twitterURL} target="_blank" rel="noopener noreferrer">
                  <img
            src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1694260187/BisonTrade_H_positivo_lineal_p1lu4k.png"
            alt="Logo Bison"
            style={{ cursor: 'pointer' }}
            />
            </a>
            </section>
            </div>
            
      
                
    </>
    );
}

export default Precio;
