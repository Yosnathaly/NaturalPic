import "../assets/css/galeria.css";
import Heart from "./Heart";
import MyContext from "../MyContext";
import { useContext } from "react";

export default function Galeria() {

  const { fotos, setFotos } = useContext(MyContext);
  

  const setFavorito = (i) => {
    const index = fotos.findIndex((foto)=> foto.id === i)
    fotos[index].favorito = !fotos[index].favorito;
    setFotos([...fotos])
  }



  return (
    <div className="galeria grid-columns-5 p-3">

      {fotos.map(foto => 

        <div className="foto" style={{ backgroundImage: `url(${foto.src})` }} key={foto.id} onClick={() => setFavorito(foto.id)}>
          <Heart filled={foto.favorito} />
        </div>   
      
      )}
    
    </div >

  );
}
