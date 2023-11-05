import Heart from "../components/Heart";
import MyContext from "../MyContext";
import { useContext } from "react";
import "../assets/css/galeria.css";

export default function Favoritos() {
const {fotos, setFotos} = useContext(MyContext)
  


  const setFavorito = (i) => {  

    // identifica la imagen
    const index = fotos.findIndex((foto)=> foto.id === i)
    //cambia el estado
    fotos[index].favorito = !fotos[index].favorito;
    //guarda la foto y su estado
    setFotos([...fotos])
  }

    return (
      <div>
        <h1>Fotos favoritas</h1>
        <div className="p-3 galeria grid-columns-4">
          {fotos.filter(foto => foto.favorito === true).map((foto)=>{
            return(
              <div className="foto" style={{backgroundImage: `url(${foto.src})`}} key={foto.id} onClick={() => setFavorito(foto.id)}>
              <Heart filled={foto.favorito} />
              </div>
            )
          })}

        </div>
      </div>
    );
  }