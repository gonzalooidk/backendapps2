import { useRouter } from 'next/router'
import Link from 'next/link';

function APPmenu() {
    const router = useRouter();
    let nameRoute = router.asPath.split("/");
    nameRoute = nameRoute[3];

    return(
        <div className="container-app-menu">
            <Link href="/dashboard/america/"><span style={{background: nameRoute ? '#fff' : '#4eff8d'}}>Configuracion</span></Link>
            <Link href="/dashboard/america/canciones"><span style={{background: nameRoute === "canciones" ? '#4eff8d': '#fff'}}>Canciones</span></Link>
            <Link href="/dashboard/america/noticias"><span style={{background: nameRoute === "noticias" ? '#4eff8d': '#fff'}}>Noticias</span></Link>
            <Link href="/dashboard/america/partido"><span style={{background: nameRoute === "partido" ? '#4eff8d': '#fff'}}>Partido</span></Link>
            <Link href="/dashboard/america/notificaciones"><span style={{background: nameRoute === "notificaciones" ? '#4eff8d': '#fff'}}>Notificaciones</span></Link>
        </div>
    )
}

export default APPmenu;