import {useState, useEffect} from 'react';
import APPpenarolmenu from '../../../components/penarol/APPpenarolmenu';
import {db, PATH_api_scrap_match} from '../../../components/penarol/config';
import {doc, setDoc, getDoc, deleteDoc, collection, query, where, getDocs} from 'firebase/firestore'; 


function Partido(props) {
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [matchDB, setMatchDB] = useState(null);

    const [urlToScrap, setUrlToScrap] = useState("");

    const [matchSintetic, setMatchSintetic] = useState(false);

    useEffect(() => { 
        (async() => { // Traigo el match de la DB
            let matchRef = doc(db, 'match', 'next');
            let match = await getDoc(matchRef);
            match = match.data();

            if(match) {
                setMatchDB(match);
            } else {
                setMatchDB(false);
            }

        })();
    }, []);

    const scrapMatchButton = async () => {
        if(urlToScrap.trim().length < 5 || !urlToScrap.trim().includes("flashscore")) {
            alert("Escribe una URL valida");
            return;
        }
        setButtonDisabled(true);

        let sendToApi = {url: urlToScrap.trim()};
        let response = await fetch(PATH_api_scrap_match, {
            method: 'POST',
            body: JSON.stringify(sendToApi)
        });
        let result = await response.json();
        setMatchSintetic(result);
        setButtonDisabled(false);
    }



    /* para borrar token especifico coño!
    useEffect(() => {
        let pepe = collection(db, 'users');
        const q = query(pepe, where("token", "==", "ExponentPushToken[eip799N5qxl1jNR6Gro5dr]"));
        getDocs(q).then(resp => {
            resp.forEach(el => {
                console.log("SII:  ", el.id)
                deleteDoc(doc(db, "users", el.id));
            })
        });
    }, []);
    */


    const publishMatchButton = async () => {
        let matchRef = doc(db, 'match', 'next');
        await setDoc(matchRef, {...matchSintetic, id: new Date().getTime()});
        window.location.reload();
    }

    const deleteMatchF = async () => {
        let matchRef = doc(db, 'match', 'next');
        await deleteDoc(matchRef);
        window.location.reload();
    }

    let handleSinteticInput = (value, name) => {
        let data = {...matchSintetic};
        data[name] = value;
        setMatchSintetic(data);
    }

    return(
        <div style={{flexDirection: 'column', display: 'flex', flex: 1}}>
            <APPpenarolmenu/>

            <div className="containerInfoApp">
                {/* DONDE SE MUESTRA EL PARTIDO ACTUAL DE LA APP ---------------------> */}
                <div style={{flexDirection: 'column', display: 'flex'}}>
                    <h2>Partido proximo</h2>
                    {matchDB === null ? <span style={{padding: 20, backgroundColor: 'beige', marginTop: 30}}>Cargando...</span> : null}
                    {matchDB === false ? <span style={{padding: 20, backgroundColor: '#f3c0c0', marginTop: 30}}>No hay proximo partido publicado en la app.</span> : null}
                    
                    {matchDB ? 
                    <div style={{flexDirection: 'column', display: 'flex', background: '#96f396', padding: 20, maxWidth: 500, marginTop: 30}}>
                        <h4>Partido en la APP:</h4>
                        <div style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                            <div style={{flexDirection: 'column', display: 'flex'}}>
                                <span style={{fontSize: 12}}>Equipo local</span>
                                <input style={{padding: 5}} value={matchDB.localTeamNameValue}  placeholder="Equipo local" disabled readonly></input>
                            </div>
                            <div style={{flexDirection: 'column', display: 'flex'}}>
                                <span style={{fontSize: 12}}>Equipo visitante</span>
                                <input style={{padding: 5}} value={matchDB.awayTeamNameValue} placeholder="Equipo visitante" disabled readonly></input>
                            </div>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                            <div style={{flexDirection: 'column', display: 'flex', alignItems: 'center'}}>
                                <span style={{fontSize: 12}}>Logo local</span>
                                <img style={{width: 35}} src={matchDB.localTeamImgValue}></img>
                            </div>
                            <div style={{flexDirection: 'column', display: 'flex', marginLeft: 10, alignItems: 'center'}}>
                                <span style={{fontSize: 12}}>Logo visitante</span>
                                <img style={{width: 35}} src={matchDB.awayTeamImgValue}></img>
                            </div>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                            <div style={{flexDirection: 'column', display: 'flex'}}>
                                <span style={{fontSize: 12}}>Fecha</span>
                                <input style={{padding: 5}} value={matchDB.valueDay} placeholder="Fecha" disabled readonly></input>
                            </div>
                            <div style={{flexDirection: 'column', display: 'flex'}}>
                                <span style={{fontSize: 12}}>Hora</span>
                                <input style={{padding: 5}} value={matchDB.valueHour} placeholder="Hora" disabled readonly></input>
                            </div>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                            <div style={{flexDirection: 'column', display: 'flex', flex: 1, maxWidth: 330}}>
                                <span style={{fontSize: 12}}>Liga</span>
                                <input style={{padding: 5}} value={matchDB.valueLigue} placeholder="Liga" disabled readonly></input>
                            </div>
                        </div>

                        <button onClick={deleteMatchF} style={{backgroundColor: '#ff9292'}} className="button-save">ELIMINAR</button>    
                        <span style={{fontSize: 10, padding: 10}}>Si eliminas el partido, en la APP dira partido no disponible en la aplicacion</span>
                    </div>
                    : null}
                </div>

                <hr style={{marginTop: 40, marginBottom: 20}}></hr>
                

                {/* INPUT PARA SCRAPEAR EL CONTENIDO ---------------------------> */}
                <div style={{flexDirection: 'column', display: 'flex'}}>
                    <h2>Scrapear partido</h2>
                    <span style={{color: 'blue', marginTop: 10}}>La URL debe ser de flashcore donde sale el proximo partido individual, es decir la pagina de proximo partido, ejemplo:</span>
                    <span style={{fontSize: 12}}>https://www.flashscore.es/partido/lEpNWiaE/#/resumen-del-partido</span>
                    <div className="input-single-container">
                        <span>URL a scrapear:</span>
                        <input value={urlToScrap} onChange={(e) => setUrlToScrap(e.target.value)} placeholder="URL a scrapear"></input>
                    </div>
                    <button disabled={buttonDisabled} onClick={scrapMatchButton} className="button-save">Scrapear</button>
                </div>
                

                {/* DONDE APARECE EL PARTIDO SINTETICO EN AMARILLO ---------------------------> */}
                {matchSintetic ?
                <div style={{flexDirection: 'column', display: 'flex', backgroundColor: 'yellow', padding: 20,  marginTop: 20}}>
                    <h4>Partido scrapeado</h4>
                    <div style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                        <div style={{flexDirection: 'column', display: 'flex'}}>
                            <span style={{fontSize: 12}}>Equipo local</span>
                            <input style={{padding: 5}} value={matchSintetic.localTeamNameValue} onChange={(e) => handleSinteticInput(e.target.value, "localTeamNameValue")} placeholder="Equipo local"></input>
                        </div>
                        <div style={{flexDirection: 'column', display: 'flex'}}>
                            <span style={{fontSize: 12}}>Equipo visitante</span>
                            <input style={{padding: 5}} value={matchSintetic.awayTeamNameValue} onChange={(e) => handleSinteticInput(e.target.value, "awayTeamNameValue")} placeholder="Equipo visitante"></input>
                        </div>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                        <div style={{flexDirection: 'column', display: 'flex', alignItems: 'center'}}>
                            <span style={{fontSize: 12}}>Logo local</span>
                            <img style={{width: 35}} src={matchSintetic.localTeamImgValue}></img>
                        </div>
                        <div style={{flexDirection: 'column', display: 'flex', marginLeft: 10, alignItems: 'center'}}>
                            <span style={{fontSize: 12}}>Logo visitante</span>
                            <img style={{width: 35}} src={matchSintetic.awayTeamImgValue}></img>
                        </div>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                        <div style={{flexDirection: 'column', display: 'flex'}}>
                            <span style={{fontSize: 12}}>Fecha</span>
                            <input style={{padding: 5}} value={matchSintetic.valueDay} onChange={(e) => handleSinteticInput(e.target.value, "valueDay")} placeholder="Fecha"></input>
                        </div>
                        <div style={{flexDirection: 'column', display: 'flex'}}>
                            <span style={{fontSize: 12}}>Hora</span>
                            <input style={{padding: 5}} value={matchSintetic.valueHour} onChange={(e) => handleSinteticInput(e.target.value, "valueHour")} placeholder="Hora"></input>
                        </div>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                        <div style={{flexDirection: 'column', display: 'flex', flex: 1, maxWidth: 330}}>
                            <span style={{fontSize: 12}}>Liga</span>
                            <input style={{padding: 5}} value={matchSintetic.valueLigue} onChange={(e) => handleSinteticInput(e.target.value, "valueLigue")} placeholder="Liga"></input>
                        </div>
                    </div>
                    <button onClick={publishMatchButton} className="button-save">PUBLICAR</button>    
                </div> : null}       
        
            </div>
        </div>
    )
}

export default Partido;