import '../styles/globals.css';
import Layoutdashboard from '../components/Layoutdashboard';

function MyApp({Component, pageProps, router}) {
    
    if(router.pathname === "/404") {  // Si la pagina no existe
        return <Component {...pageProps} />
    }

    if(router.asPath.includes("dashboard")) {  // Si es el dashboard
        return(
            <Layoutdashboard>
                <Component pageProps={pageProps} router={router} />
            </Layoutdashboard>
        )
    }

    // Todas las demas paginas
    return <Component {...pageProps} />
}


export default MyApp;
