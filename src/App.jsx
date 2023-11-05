import "./styles.css";
import {photos} from "../public/fotos.json"

import { BrowserRouter, Routes, Route } from "react-router-dom";   // evita que se recargue la pagina al cambiar de vista (SPA)
import { useEffect, useState } from "react";        //controlar cambios sin necesidad de recargar la pagina 
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

import MyContext from "./MyContext";  // se importa el Mycontext


export default function App() {

  const endpoint = "/fotos.json";           
  const picsNaturales = async () => {         // Funcion Asyncrona para archivo local
    const res = await fetch(endpoint);        // se utiliza fetch y await
    let {photos} = await res.json();
    photos = photos.map((photo) =>({
      id: photo.id,
      src: photo.src.original,
      favorito: false
    }))
    setFotos(photos)
  }



  useEffect(()=>{              // consume api, el contenido de usseffect se ejecute solo una vez
    picsNaturales()
  }, []);

  const [fotos, setFotos] = useState([]);  // arreglo vacio, array para utlizar .map
  const sharedData = {fotos, setFotos};



  
  return (
    <div className="App">
      <MyContext.Provider value = {sharedData} >
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}