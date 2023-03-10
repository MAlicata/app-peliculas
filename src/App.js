import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';
import peliculasJson from './peliculas.json';
import Paginacion from './Paginacion';
import { useState } from 'react';

function App() {

  const [paginaActual, setPaginaActual] = useState(1);
  const TOTAL_POR_PAGINA = 7;

  let peliculas = peliculasJson;


  const cargarPeliculas = () => {
    peliculas = peliculas.slice(
      (paginaActual - 1) * TOTAL_POR_PAGINA,
      paginaActual * TOTAL_POR_PAGINA
    );
  }

  
  const getTotalPaginas = () => {
    let cantidadTotalDePeliculas = peliculasJson.length;
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
  }

  cargarPeliculas();
  return (   
    <PageWrapper>
      {peliculas.map(pelicula =>
        <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion} 
        director={pelicula.director} actores={pelicula.actores}
        fecha={pelicula.fecha} 
        duracion={pelicula.duracion} 
        img={pelicula.img}>
        {pelicula.descripcion}
        </Pelicula>
      )}

    <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
      setPaginaActual(pagina)
    }}/>
    </PageWrapper>
    
  );
}

export default App;
