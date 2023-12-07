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
        <h1 className='flex justify-center mb-7 font-bold'>Te presento el taller de los 4 Boomers de Precio y Volumen</h1>
        <p className='text-lg text-justify mb-9'><strong>Tres días completos en Madrid</strong> (Sábado, Domingo y Lunes), <strong>cuatro sesiones entre el sabado y domingo</strong> impartidas por los cuatro boomers donde los alumnos están <strong>cuatro horas en cada taller teórico-practico</strong> y <strong>el lunes todos juntos</strong> viendo la <strong>operativa en real</strong> de todo lo dado el fin de semana.</p>
        <Accordion >
            <AccordionItem >
                <AccordionItemHeading >
                    <AccordionItemButton className='bg-yellow-400 p-4 hover:bg-yellow-600 text-lg font-bold text-slate-950 hover:text-zinc-50 ' >                    
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
                <li className='list-disc'>Montamos la Estrategia: desde operador muy agresivo a operador muy conservador sin poner en riesgo el <strong>Ratio B/R</strong></li>
              </ul>
            </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Taller 2# - Estructura de mercado <span className="color_primario"><strong>-Elliott Operativo-</strong> </span> truños y huevos fritos
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div>
        </div>
    );
}

export default AccordionInfo;
