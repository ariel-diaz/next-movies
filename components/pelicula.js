import Link from 'next/link';
const Pelicula = ({Title, Poster, imdbID}) => {

    return ( 
        <li className="pelicula">
            <h3> <Link href={`/detalle?id=${imdbID}`}><a>{Title}</a></Link> </h3>
            <img src={Poster} className="imgPelicula"/>
        </li>
    )

}

export default Pelicula;


