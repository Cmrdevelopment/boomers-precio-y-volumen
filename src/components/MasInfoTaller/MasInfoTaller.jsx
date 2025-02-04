import "./MasInfoTaller.css";

// eslint-disable-next-line react/prop-types
const Cuadro = ({ texto }) => {
    return (
      <div className=" bg-cyan-600 w-72 h-36 rounded-md shadow-lg m-7 flex justify-center items-center hover:bg-cyan-500">
            <h3 className="text-white m-5 flex justify-center items-center text-center hover:text-black">{texto}</h3>
      </div>
    );
};

const MasInfoTaller = () => {

    return (
        <>
        <div className=" flex flex-col justify-center items-center font-semibold bg-slate-100 p-5">
            <h2 className="font-extrabold mt-3">¿A quien va dirigido?</h2>
            <h5 className="flex justify-center items-center text-semibold sm:text-xs mt-3">(Dirigido para aquellos que desean conocer o ya se han iniciado en la metodología de Precio y Volumen e itc)</h5>
            <p className="Landinginfo_info_a-quien-va-dirigido-y-te-gusta text-neutral-500 font-bold" > Si te gusta la inversión o especulación en la bolsa y quieres ver cómo leemos el mercado, solo debes venir y disfrutar del mercado con nosotros. Hablaremos sobre la manipulación de los mercados, pero no la manipulación que uno suele pensar, sino la que podrás ver a través de un gráfico. Sí, aquella que hacen los `profesionales` para que la `masa` deje su pasta sin `darse cuenta`.</p>
            <h2 className="md:text-3xl text-center text-xl">
            Entender, comprender para operar conociendo cómo y porqué se mueve el mercado
            </h2>  

            <div className="Landinginfo_info_a-quien-va-dirigido-comprender_y_operar">
            <p>Aprenderás y practicaremos, bajo la metodología de los 4 Boomers, y comprenderás <strong>cómo un profesional hace sus jugarretas y arrebata</strong>, de una manera sencilla, la pasta a la masa.</p>
            <p>Realizarás hipótesis basadas en el conocimiento y <strong>reducirás el miedo a entrar y operar en el mercado</strong> porque sabrás dónde poner tu stop y dónde poner tu profit en cada momento gracias a la estructura.</p>

            </div> 
            <p className="Landinginfo_info_a-quien-va-dirigido-adivinar font-semibold md:w-1/3 w-full">No se trata de adivinar ni de apostar a un largo o corto, se trata de ENTENDER y COMPRENDER qué es lo que ocurre en el mercado y cuándo podemos hacer hipótesis y cuándo no. Ayudándote en tu operativa a asumir riesgos proporcionados y con una gestión monetaria aceptable.</p>          
            </div>

            <section className="flex flex-col justify-center items-center mt-5 hover:bg-indigo-50">
            <h1 className="pl-3 pr-3 font-bold text-center">¿Qué incluye el taller de los 4 Boomers?</h1>
            <div className="flex flex-wrap justify-center">
            <div className="flex flex-wrap justify-center sm:gap-7">
                {/* Primera fila */}
                    <Cuadro texto="4 talleres de 4 horas sabado y domingo" />
                    <Cuadro texto="Agua y tentenpie en los descansos" />
                    <Cuadro texto="Operativa en real del lunes en horario regular" />                    
                    
            </div>
            <div className="flex flex-wrap justify-center sm:gap-7">
                    {/* Segunda fila */}
                    <Cuadro texto="Fin de semana dedicado al trading con gente que se dedica al trading" />
                    <Cuadro texto="¿Una cerveza? y las que hagan falta" />
                    <Cuadro texto="Si les apatece, comidas y cenas con los compañeros y profes" />
            </div>
            </div>s
            </section>

            <seccion className="flex flex-col justify-center items-center mt-5">            
            <h1 className="pl-3 pr-3 font-bold text-center">¿Cuales serán los horarios de los talleres?</h1>
            <div className="flex flex-wrap justify-center bg-slate-500 mt-5 mb-5">
            <div className="flex flex-wrap justify-center sm:gap-7 ">
                {/* Primera fila */}
                    <Cuadro texto="Sábado 10 de 8:00 a 9:00 recogida de inscripción y presentación del evento" />
                    <Cuadro texto="Sábado 10 de 09:00 a 13:00 y de 16:00 a 20:00 horas" />
                    <Cuadro texto="Domingo 11 de 09:00 a 13:00 y de 16:00 a 20:00 horas" />
                    <Cuadro texto="Lunes 12 de 15:00 a 18:00 horas" />                    
                    
            </div>
            
            </div>
            
            <h5 className="text-center">¡Si deseas quedarte en el hotel que nos quedamos nosotros, no dudes en preguntarnos!</h5> <h5 className="text-center mt-5"> ¡Espero verte pronto y que vivas un TALLER inolvidable en MADRID BOOMERS! 🌟🏨</h5>  
            </seccion>
        </>
    )
}

export default MasInfoTaller;