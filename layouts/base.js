import Link from 'next/link';



 const Base = ({children}) => {

    return (
        <div className="main">
            <div className="logo">
            <Link href="/">
                 <a>Home</a>
              </Link>
            </div>

            {children}
         
            <style jsx global> {`
                .main {
                    padding: 10px 50px;
                    font-family: sans-serif;
                }
                .logo a {
                    color: inherit;
                }
                a {
                    text-decoration: none;
                }
                .lista {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                }
                .pelicula {
                    display:flex;
                    flex-direction:column;
                    width: 25%;
                }
                .imgPelicula {
                    height: 400px;
                    width: 200px;
                }

                .control {
                    text-align: center;
                }

                .control a {
                    padding: 0 10px;
                }
            `}
            </style>
        </div>
    )
}

export default Base;
