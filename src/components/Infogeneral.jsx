import SimpleMap from './SimpleMap.jsx';

const InfoGeneral = () => {



    return (
        <>
        <span className="felx justify-center text-center">
            <h1>Talleres <span className='color_primario'><strong>presencial</strong></span> de Precio, Volumen y mucho más</h1>
            <h1 className='font-extrabold m-9 font-poppins'>El método que siguen los 4 boomers y que ya usan más de 500 alumnos, cada día, en los mercados<br></br> creando hipótesis que utilizan para operar <span className='text-lg font-normal mt-'><br></br>(¿O sigues pensando que con 5 indicadores podrás batir al mercado?)</span></h1>
        
            <h2 className='mt-7'>Lugar y Fecha: 17 al 19 Febrero 2024</h2>
            <h1 className="font-extrabold mt-3">MADRID</h1>
            <h3>Sábado 17 de 09:00 a 13:00 y de 16:00 a 20:00 horas</h3>
            <h3>Domingo 18 de 09:00 a 13:00 y de 16:00 a 20:00 horas</h3>
            <h3>Lunes 19 de 15:00 a 18:00 horas</h3>
            <h2>¿Donde será el taller?</h2>
            <h5>Linkia FP Madrid Centro de estudios en calle de Albarracín, 34, 28037 Madrid</h5>
            <h5><a className=""  href={'https://maps.app.goo.gl/uVMN6ybeD41Wy7dJ8'} target="_blank" rel="noopener noreferrer">¿Como llegar al tallar?</a></h5>
            <h5>¡Si deseas quedarte en el hotel que nos quedamos nosotros, no dudes en preguntarnos!</h5> <h5> ¡Espero verte pronto y que vivas un TALLER inolvidable en nuestro hotel! 🌟🏨</h5>         
            
        </span>
        <div>
        <SimpleMap />
        </div>
        </>
    )
};

export default InfoGeneral;