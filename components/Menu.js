import Link from 'next/link';
import {useState, useEffect} from 'react';

const menu = [
    {
     id: 'penarol',
     name: 'Canciones de Peñarol',
     hrefMain: '/dashboard/penarol',
     icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Escudo-penarol-2015.png',
    },

    {
      id: 'america',
      name: 'Canciones del America',
      hrefMain: '/dashboard/america',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Club_Am%C3%A9rica_Retro.png/238px-Club_Am%C3%A9rica_Retro.png',
     }
];

export default function Menu(props) {
    const  [menuSelected, setMenuSelected] = useState(false);

    useEffect(() => {
       let path = props.routePath.split("/");  // Para pintar de verde que APP esta seleccionada
       setMenuSelected(path[2]);
    }, [props.routePath])


    return(
        <div className="menuDashboard">
          {menu.map(el => {
            return(
              <Link key={el.id} href={el.hrefMain}>
                <div style={{backgroundColor: menuSelected === el.id ? '#4eff8d' : '#fff'}}  className="itemMenu">
                    <img style={{width: 25, height: 25}} src={el.icon}></img>
                    <h3>{el.name}</h3>
                </div>
              </Link>
            )
          })}
        </div>
    )
}