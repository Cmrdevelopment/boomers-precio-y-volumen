
const Header = () => {
    
    const backgroundImageUrl = "https://res.cloudinary.com/dwbxywvdw/image/upload/v1738663245/Boomers/Equipo_A_byn_gtq9fy.png";
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
          <span className="volvemos-animation">MAYO 2025</span>
          </h1>
          <img className="mb-4 mx-auto w-1/3 sm:w-1/6" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1738663388/Boomers/Logo_sin_precio_y_volumen_ci0emv.png" alt="logo Boomers" />
        </div>
        <div className="bg-white shadow p-8 md:p-36" style={containerStyle}>
          <h1 className="text-indigo-50 text-3xl font-extrabold text-center sm:text-7xl">
            El <span className="text-yellow-600">Equipo</span> A
          </h1>
          <p className="text-xl font-extrabold text-center mt-5 sm:text-3xl">
            <span className="text-indigo-50">{"\"En MADRID\""}</span>
          </p>
        </div>
        <div className="flex justify-around">
        <div className="flex flex-col items-center m-5">
          <img className="w-48 object-contain" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701940868/Boomers/Drive_Jordi_sin_fondo_xxq0hq.png" alt="Foto Jordi" />
          <img className="w-36 h-12 object-contain" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701727670/Boomers/Logo_Jordi_Trading_180_x_40_mxefav.png" alt="logo Jordi" />
          </div>
          <div className="flex flex-col items-center m-5">
          <img className="w-48 object-contain" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701995706/Boomers/Foto_cmrbolsa_dedo_campo_SIN_FONDO_rvysip.png" alt="foto Cmrbolsa" />
          <img className="w-36 h-12 object-contain" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701727730/Boomers/Logo_a_modificar-removebg-preview_kjo5ld.png" alt="logo cmrbolsa" />
          </div>
          <div className="flex flex-col items-center m-5">
          <img className="w-52 object-contain" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1702131714/Foto_Miguel_mano_SIN_FONDO_pvedvp.png" alt="foto Miguel Ramirez"/>
         
          <img className="w-48 h-16 -my-4 object-contain" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1702132498/Logo_lobo_Miguel_Ramirez_cerca-con_letras_ampliadas_c8tzx9.png" alt="logo Miguel Ramirez" />
          </div>
          <div className="flex flex-col items-center m-5">          
          <img className="w-48 object-contain" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701940871/Boomers/Drive_David_sin_fondo_r2ignh.png" alt="foto David Leyguarda" />
          <img className="w-36 h-12 object-contain" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701995794/Boomers/Logo_David_Leyguarda-removebg-preview_vrsbu3.png" alt="logo David Leyguarda" />
          </div>
        </div>
        
        <section className="flex flex-col items-center sm:flex-row sm:justify-center">
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