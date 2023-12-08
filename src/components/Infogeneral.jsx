import SimpleMap from './SimpleMap.jsx';

const InfoGeneral = () => {



    return (
        <>
        <span className="felx justify-center text-center">
            <h1>Talleres <span className='color_primario'><strong>presenciales</strong></span> de Precio, Volumen y mucho más</h1>
            <h1 className='font-extrabold m-5 font-poppins text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>
            El método que siguen los 4 boomers y que ya usan  
            <span className='color_primario'>
            , más de 500 alumnos</span>, cada día, en los mercados creando hipótesis que utilizan para operar 
            <span className='text-sm font-normal md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>
            <br></br>(¿O sigues pensando que con 5 indicadores podrás batir al mercado?)</span>
            </h1>
            <div className='bg-slate-100 p-5'>
            <h1 className='mt-7 color_primario font-bold'>Lugar y Fecha: <span className='text-black'>17 al 19 Febrero 2024</span></h1>
            <h1 className="font-extrabold m-3 text-7xl">
            MADRID
            </h1>
            </div>
            <div className='m-3'>
            <h2 className='text-3xl text-gray-700'>¿Donde será los talleres?</h2>
            <h5 className='m-2'>Linkia FP Madrid Centro de estudios en calle de Albarracín, 34, 28037 Madrid</h5>
            <h5><a className=" text-lg text-indigo-500 hover:text-indigo-300"  href={'https://maps.app.goo.gl/uVMN6ybeD41Wy7dJ8'} target="_blank" rel="noopener noreferrer">¿Como llegar al taller?</a></h5>
            </div>
        </span>
        <div>
        <SimpleMap />
        </div>
        </>
    )
};

export default InfoGeneral;