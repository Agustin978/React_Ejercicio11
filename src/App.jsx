import {Navbar, Container} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './Components/Formulario';
import ContenedorNoticias from './Components/ContenedorNoticias';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  
  //const [noticia, setNoticia] = useState({});
  const [noticias, setNoticias] = useState([]);
  const [noticiasFiltradas, setNoticiasFiltradas] = useState([]);
  //const [cantidadNoticias, setCantidadNoticias] = useState();

  useEffect(()=>{
    consultarApi();
  },[])

  const consultarApi = async () =>
  {
    try
    {
      const retornoApi = await fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=840f66d5a9f747d8879103256e63dca9');
      const datosApi = await retornoApi.json();
      //console.log(datosApi);
      //console.log(datosApi.articles[0]);
      const noticiasApi = datosApi.articles;
      setNoticias(noticiasApi);
      setNoticiasFiltradas(noticiasApi);
      //setCantidadNoticias(datosApi.totalResults);
    }catch(error)
    {
      console.log('Como ez pozible ezte zuzezoo a ocurrido un error :´( :',error);
    }
  }

  const filtraNoticias = (buscados) =>
  {
    if(buscados!='')
    {
      console.log(buscados);
      let _noticiasFiltradas = noticias.filter((noticia) => noticia.title && noticia.title.includes(buscados));
      console.log(_noticiasFiltradas);
      setNoticiasFiltradas(_noticiasFiltradas);
    }else
    {
      setNoticiasFiltradas(noticias);
    }
    /*
    console.log(buscados);
    console.log(noticias);
    let _noticias = noticias.filter((noticia) => noticia.title.includes(buscados))
    setNoticias(_noticias);*/
  }
  //console.log(cantidadNoticias);

  return (
    <>
      <Navbar expand="lg" variant="dark" bg="dark">
          <h1 className='fw-bolder text-light m-auto p-3'>Noticias</h1>
      </Navbar>
      <Container className='mainPage mt-5'>
        <Formulario filtraNoticias={filtraNoticias}/>
        <ContenedorNoticias noticias={noticiasFiltradas}/>
      </Container>
      <footer className='bg-dark text-center text-secondary py-4'>
        <p className='display-6'>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App
