import Base from '../layouts/base';
import Head from 'next/head';
import axios from 'axios';
import Link from 'next/link';
import Pelicula from '../components/pelicula';


const Home = ({ peliculas, pagina }) => {

    Home.getInitialProps = async ({ query }) => {
        const pagina = query.pagina ? Number(query.pagina) : 1;
        const respuesta = await axios.get(`http://www.omdbapi.com/?apikey=49dbe0df&s=batman&page=${pagina}`);
        const peliculas = respuesta.data.Search;
        // los props de nuestro componente
        return {
            peliculas, pagina
        }
    }


    return (
        <Base>
            <Head>
                <title> MoviesApp </title>
            </Head>
            <hr/>
            {peliculas && peliculas.length > 0
                ? <div> <ul className="lista">
                    {peliculas.map(p => <Pelicula key={p.imdbID} {...p} />)}
                </ul>
                    {renderPagination(pagina)} </div>
                : <h3> Cargando ... </h3>}
        </Base>
    )
}


const renderPagination = (pagina) => {
    const anterior = pagina > 1
        ? <Link href={`/?pagina=${pagina - 1}`}><a> Anterior </a></Link>
        : null;

    return (
        <div className="control">
            {anterior}
            <Link href={`/?pagina=${pagina + 1}`}><a> Siguiente </a></Link>
        </div>
    )

};



export default Home;
