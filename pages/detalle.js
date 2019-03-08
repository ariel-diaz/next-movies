import  Pelicula  from '../components/pelicula';
import axios from 'axios';
import Base from './../layouts/base';


const Detalle = ({pelicula}) => {

    Detalle.getInitialProps = async ({query}) => {
        const id = query.id;
        const respuesta = await axios.get(`http://www.omdbapi.com/?apikey=49dbe0df&i=${id}`);
        const pelicula = await respuesta.data;
        // los props de nuestro componente
        return {
            pelicula
        }
    }

    // const movie = {
    //     Title: pelicula.Title,
    //     Poster: pelicula.Poster,
    //     imdbID: pelicula.imdbID
    // }
    

    return (
        <Base>
        {pelicula && pelicula.Title !== "" ? <Pelicula  Title={pelicula.Title} 
                                            imdbID={pelicula.imdbID}
                                            Poster={pelicula.Poster}
                                            /> : <h3> CARGANDO ... </h3>}
        </Base>
    )
}

export default Detalle;
 