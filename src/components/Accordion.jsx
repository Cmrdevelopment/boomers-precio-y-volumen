import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const AccordionInfo = () => {

    
    return (
        <div className='flex justify-center m-5'>
        <div className='w-full sm:w-1/2'>
        <h1 className='flex justify-center mb-7 font-bold text-center'>Te presento el taller de los 4 Boomers de Precio y Volumen</h1>
        <p className='text-lg text-justify mb-9'><strong>Tres días completos en Madrid</strong> (Sábado, Domingo y Lunes), <strong>cuatro sesiones entre el sabado y domingo</strong> impartidas por los cuatro boomers donde los alumnos están <strong>cuatro horas en cada taller teórico-practico</strong> y <strong>el lunes todos juntos</strong> viendo la <strong>operativa en real</strong> de todo lo dado el fin de semana.</p>
        <Accordion >
            <AccordionItem >
                <AccordionItemHeading >
                    <AccordionItemButton className='bg-yellow-400 p-4 hover:bg-gray-200 text-lg font-bold text-slate-950 hover:text-zinc-50 ' >                    
                    Taller 1# - El <span className="color_primario">volumen </span> y los rangos laterales
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel >
                <ul className='list-none pl-4 space-y-2 ml-5'>
                <p>Explicaciones <strong>teórico-práctica de los rangos laterales y el volumen</strong> por Miguel Ramírez durante 4 horas. El esquema taller de Miguel será de:</p>
                <li className='list-disc'>Introducción para <strong>enlazar con el taller anterior</strong>: después de un movimiento impulsivo siempre viene UN {"\"RANGO LATERAL\""}</li>
                <li className='list-disc'>Claves para reconocer que empieza el {"\"RANGO LATERAL\""}</li>
                <li className='list-disc'>Ley de <strong>Oferta y Demanda</strong> (aplicada a derivados: FUTUROS)</li>
                <li className='list-disc'>Tipos de Ordenes: como <strong>complemento a la formación</strong> del {"\"RANGO LATERAL\""}</li>
                <li className='list-disc'>Procesos de Acumulación - Distribución: la clave localizar la <strong>CLAVICULAR</strong></li>
                <li className='list-disc'>Fortaleza vs Debilidad: Reconocer <strong>el lado correcto del mercado</strong>.</li>
                <li className='list-disc'>Montamos la Estrategia: desde <strong>operador muy agresivo</strong> a <strong>operador muy conservador</strong> sin poner en riesgo el <strong>Ratio B/R</strong></li>
                </ul>
                </AccordionItemPanel>
            </AccordionItem>
                <AccordionItem >
                <AccordionItemHeading >
                    <AccordionItemButton className='bg-yellow-400 p-4 hover:bg-gray-200 text-lg font-bold text-slate-950 hover:text-zinc-50 ' >                    
                    Taller 2# - Conceptos <span className="color_primario">básicos del ICT </span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel >
                <ul className='list-none pl-4 space-y-2 ml-5'>
                <p>Explicaciones <strong>teórico-práctica del ICT </strong> por Jordí Martí durante 4 horas. El esquema taller de Jordi será sobre el ICT:</p>
                
                <p>El ICT nos ayuda a <strong>posicionarnos en un movimiento con precisión</strong>, nos ayuda a entender cómo funcionan los algoritmos de alta frecuencia y <strong>nos muestra hasta dónde se moverán los precios y hasta dónde retroceden</strong> en búsqueda de liquidez.</p>
                <li className='list-disc'>Introducción a <strong>ICT</strong></li>
                <li className='list-disc'>Liquidez y Focalización</li>
                <li className='list-disc'>Estructura del <strong>precio</strong></li>
                <li className='list-disc'>Premium / Descuento</li>
                <li className='list-disc'>Valor razonable y Patrocinio (FV)</li>
                <li className='list-disc'>Liquidez interna / Liquidez externa</li>
                <li className='list-disc'>Bloque de <strong>ordenes</strong>, Bloque de <strong>mitigación</strong>, Bloque de <strong>propulsión</strong> y breaker</li>
                <li className='list-disc'>Vacíos y Piscinas de liquidez y FVG</li>
                </ul>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem >
                <AccordionItemHeading >
                    <AccordionItemButton className='bg-yellow-400 p-4 hover:bg-gray-200 text-lg font-bold text-slate-950 hover:text-zinc-50 ' >                    
                    Taller 3# - Estructura de mercado<span className="color_primario">-Elliott Operativo </span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel >
                <ul className='list-none pl-4 space-y-2 ml-5'>
                <p>Explicaciones <strong>teórico-práctica de Elliott Operativo</strong> por Carlos Martín durante 4 horas. El esquema taller de Carlos será de:</p>
                
                <li className='list-disc'>Introducción a <strong>Elliott Operativo</strong></li>
                <li className='list-disc'>Enlazar con el taller anterior: <strong>después de un movimiento lateral</strong>, {"\"RANGO LATERAL\""}, siempre viene <strong>UN «IMPULSO»</strong></li>
                <li className='list-disc'>Claves para reconocer como empieza un «IMPULSO» desde un {"\"RANGO LATERAL\""} (El mercado es fractal)</li>
                <li className='list-disc'>Hasta <strong>donde debe/puede llegar un IMPULSO y como sabemos que ha terminado.</strong> La colocación de CLAVICULARES o zonas donde el profesional debe decantarse (aplicada a derivados: FUTUROS)</li>
                <li className='list-disc'>Como detectar un impulso sano en los diferentes grados (FV)</li>
                <li className='list-disc'>Entradas pasivas y activas: Conocer la tipología de <strong>entradas básicas y avanzadas </strong>para evitar que salgas rápido o muy lento del mercado</li>
                
                </ul>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem >
                <AccordionItemHeading >
                    <AccordionItemButton className='bg-yellow-400 p-4 hover:bg-gray-200 text-lg font-bold text-slate-950 hover:text-zinc-50 ' >                    
                    Taller 4# - Trading <span className="color_primario">intradía con Opciones</span> Fundamentos Básicos
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel >
                <ul className='list-none pl-4 space-y-2 ml-5'>
                <p>Explicaciones <strong>teórico-práctica de Trading intradía con opciones</strong> por David Leyguarda durante 4 horas. El esquema taller de David será de:</p>
                
                <li className='list-disc'>Fundamentos Básicos: <strong>CALL y PUT</strong></li>
                <li className='list-disc'>Fundamentos Básicos: <strong>Vender y comprar, Expiraciones, Valor</strong></li>
                <li className='list-disc'>Griegas: <strong>Delta Gamma Theta y Volatilidad</strong></li>
                <li className='list-disc'>Griegas: <strong>El VIX</strong></li>
                <li className='list-disc'>Opciones referenciadas a: <strong>SP500, NASDAQ, RUSSEL, DOW JONES, ORO, PETROLEO, 0DTE</strong></li>
                <li className='list-disc'>Estrategias según mercado</li>
                
                </ul>
                </AccordionItemPanel>
            </AccordionItem>

        </Accordion>
        </div>
        </div>
    );
}

export default AccordionInfo;
