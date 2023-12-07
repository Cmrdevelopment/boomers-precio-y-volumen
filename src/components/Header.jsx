
const Header = () => {
    
    const backgroundImageUrl = "https://res.cloudinary.com/dwbxywvdw/image/upload/v1701718883/Boomers/Imagen_4_jinetas_con_fondo_nublado_vjnv41.jpg";
  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const twitterURL = 'https://twitter.com/bison_trade';

    return (
        <>
        <div className="mb-6 bg-cover bg-center bg-no-repeat">
          <h1 className="mt-8 text-5xl font-extrabold text-black text-center sm:text-9xl">
          <span className="volvemos-animation">VOLVEMOS</span>
          </h1>
          <img className="mb-4 mx-auto w-1/3 sm:w-1/12" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701720214/Boomers/Logo_Boomers_centrado_ht0jt8.png" alt="logo Boomers" />
        </div>
        <div className="bg-white shadow p-8 md:p-36" style={containerStyle}>
          <h1 className="text-indigo-50 text-3xl font-extrabold text-center sm:text-7xl">
            Los <span className="text-yellow-600">cuatro jinetes</span> del apocalipsis
          </h1>
          <p className="text-xl font-extrabold text-center mt-5 sm:text-3xl">
            <span className="text-indigo-50">{"\"MADRID\""}</span>
          </p>
        </div>
        <div className="flex justify-around">
        <div className="flex flex-col items-center m-5">
          <img className="w-48 object-contain" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701940868/Boomers/Drive_Jordi_sin_fondo_xxq0hq.png" alt="Foto Jordi" />
          <img className="w-36 h-12 object-contain" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701727670/Boomers/Logo_Jordi_Trading_180_x_40_mxefav.png" alt="logo Jordi" />
          </div>
          <div className="flex flex-col items-center m-5">
          <img className="w-48 object-contain" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701941020/Boomers/Foto_redonda_cmrbolsa_9_cjqbsp.jpg" alt="foto Cmrbolsa" />
          <img className="w-36 h-12 object-contain" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701727730/Boomers/Logo_a_modificar-removebg-preview_kjo5ld.png" alt="logo cmrbolsa" />
          </div>
          <div className="flex flex-col items-center m-5">
          <img className="w-48 object-contain" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701940872/Boomers/Drive_Miguel_sin_fondo_kfi0mm.png" alt="foto Miguel Ramirez"/>
          <img className="w-36 h-12 object-contain" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701727681/Boomers/Logo_Miguel_10_rulhs7.png" alt="logo Miguel Ramirez" />
          </div>
          <div className="flex flex-col items-center m-5">          
          <img className="w-48 object-contain" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701940871/Boomers/Drive_David_sin_fondo_r2ignh.png" alt="foto David Leyguarda" />
          <img className="w-36 h-12 object-contain" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701727688/Boomers/Logo_el_cafecillo_sin_fondo_5_180_x_48_ebinbb.png" alt="logo David Leyguarda" />
          </div>
        </div>
        
        <section className="flex flex-col items-center mt-7 sm:flex-row sm:justify-center">
          <h3 className="text-sm font-extrabold text-center mb-2 sm:mr-4 sm:mb-0 sm:text-lg">
            Patrocinado por:
          </h3>
          <a href={twitterURL} target="_blank" rel="noopener noreferrer">
            <img
              src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1694260187/BisonTrade_H_positivo_lineal_p1lu4k.png"
              alt="Logo Bison"
              className="w-48"
              style={{ cursor: 'pointer' }}
            />
          </a>            
        </section>
        <div className="flex justify-center">
        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VX7WDXDPMVYBE" target="_blank" rel="noopener noreferrer">
        <button className="boton_reserva volvemos-animation">Reservar mi plaza</button>
        </a>
</div>
      </>
    )
}

export default Header;