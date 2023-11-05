import Galeria from "../components/Galeria";  // importacion componente galeria
import MyContext from "../MyContext";
import { useContext } from "react";


export default function Home() {
  
  return (
    <div id="Home">
      <h1>Natural Pic</h1>

      <Galeria />
    </div>
  );
}
