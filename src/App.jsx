import Header from "./components/Header.jsx";
import InfoGeneral from "./components/Infogeneral.jsx";

const App = () => {
  

  return (
    <>
    <Header/>
    <InfoGeneral/>
    </>
  );

}

export default App;


// const App = () => {

//   const backgroundImageUrl = "https://res.cloudinary.com/dwbxywvdw/image/upload/v1701718883/Boomers/Imagen_4_jinetas_con_fondo_nublado_vjnv41.jpg";

//   const containerStyle = {
//     backgroundImage: `url(${backgroundImageUrl})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   };
//   const twitterURL = 'https://twitter.com/bison_trade';

//   return (
//     <>
//     <div>
//       <h1 className="mt-20 text-9xl font-extrabold text-black text-center">
//       VOLVEMOS
//       </h1>
//       <img className="mx-auto w-1/12" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701720214/Boomers/Logo_Boomers_centrado_ht0jt8.png" alt="logo Boomers" />
//     </div>
//     <div className="bg-white shadow p-36 mt-14" style={containerStyle}>
//       <h1 className="text-7xl font-extrabold text-white text-center">
//         Los <span className="text-yellow-600">cuatro jinetes</span> del apocalipsis
//         {/* text-indigo-600 */}
//         {/* text-gray-500 */}
//       </h1>
//       <p className="text-4xl font-extrabold text-center mt-5">
//         <span className="text-indigo-50">{"\"BOOMERS\""}</span>
//       </p>
//     </div>
//     <div className="flex justify-center mt-10">
//     <img className="mx-auto w-1/12" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701727670/Boomers/Logo_Jordi_Trading_180_x_40_mxefav.png" alt="logo Jordi" />
//     <img className="mx-auto w-1/12" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701727730/Boomers/Logo_a_modificar-removebg-preview_kjo5ld.png" alt="logo cmrbolsa" />
//     <img className="mx-auto w-1/12" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701727681/Boomers/Logo_Miguel_10_rulhs7.png" alt="logo Miguel Ramirez" />
//     <img className="mx-auto w-1/12" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701727688/Boomers/Logo_el_cafecillo_sin_fondo_5_180_x_48_ebinbb.png" alt="logo David Leyguarda" />

//     </div>
//     <section className="flex items-center justify-center mt-16"> 
//                 <h3 className="text-3xl font-extrabold">Patrocinado por:</h3>         
//                 <a href={twitterURL} target="_blank" rel="noopener noreferrer">
//                     <img
//                         src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1694260187/BisonTrade_H_positivo_lineal_p1lu4k.png"
//                         alt="Logo Bison"
//                         className="ml-5 w-72 h-auto"
//                         style={{ cursor: 'pointer' }}
//                     />
//                 </a>
//     </section>
//     </>
//   );
// }

// export default App;