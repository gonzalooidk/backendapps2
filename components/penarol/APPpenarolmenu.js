import { useRouter } from 'next/router'
import Link from 'next/link';

function APPpenarolmenu() {
    const router = useRouter();
    let nameRoute = router.asPath.split("/");
    nameRoute = nameRoute[3];

    return(
        <div className="container-app-menu">
            <Link href="/dashboard/penarol/"><span style={{background: nameRoute ? '#fff' : '#4eff8d'}}>Configuracion</span></Link>
            <Link href="/dashboard/penarol/canciones"><span style={{background: nameRoute === "canciones" ? '#4eff8d': '#fff'}}>Canciones</span></Link>
            <Link href="/dashboard/penarol/noticias"><span style={{background: nameRoute === "noticias" ? '#4eff8d': '#fff'}}>Noticias</span></Link>
            <Link href="/dashboard/penarol/partido"><span style={{background: nameRoute === "partido" ? '#4eff8d': '#fff'}}>Partido</span></Link>
            <Link href="/dashboard/penarol/notificaciones"><span style={{background: nameRoute === "notificaciones" ? '#4eff8d': '#fff'}}>Notificaciones</span></Link>
        </div>
    )
}

export default APPpenarolmenu;