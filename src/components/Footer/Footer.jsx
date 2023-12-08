import "./Footer.css";


const Footer = () => {
    const handleButtonTelegramClick = () => {
      window.open('https://t.me/+9Wa4ncOgmdk1OTRk', '_blank');
    };
    
    return (   
      <>
      <div className="LandingSaberMas_quieres_saber_mas">
    <button className="LandingSaberMas_boton_quieres_saber_mas" onClick={handleButtonTelegramClick}>
      <div className="LandingSaberMas_texto font-bold">
        <h1>¿Quieres saber más sobre el taller?</h1>
        <p>Entra en el <span>TELEGRAM</span> y pregunta todas tus dudas</p>
        <p>Únete</p>      
      </div>
    </button>
    </div>
      
        <div className="footer">
        <p> <a href="http://boomersprecioyvolumen.com" className="link">©2023 by boomers</a> </p>
        <p> <a href= "http://boomersprecioyvolumen.com" className="link">Términos y Condiciones</a> </p>
      </div>
      </>
    );
}

export default Footer;


// "https://boomersprecioyvolumen.com/terminos-y-condiciones/"

