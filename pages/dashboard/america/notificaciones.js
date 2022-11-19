import {useState, useEffect} from 'react';
import APPmenu from '../../../components/america/APPmenu';
import {db, PATH_api_send_notification} from '../../../components/america/config';
import {doc, collection, getDocs, query, updateDoc, limit, where} from 'firebase/firestore'; 


let pantallasAvaliable = [
    {name:"Sounds", info: "Pantalla de inicio / canciones"}, 
    {name:"News", info: "Pantalla de todas noticias"},
    {name:"Match", info: "Pantalla de proximo partido"},
    {name:"IndividualNews", info: "Pantalla noticias individuales"}
];

function Notificaciones(props) {
    const [titleNotification, setTitleNotification] = useState("");
    const [descriptionNotification, setDescriptionNotification] = useState("");
    const [screen, setScreen] = useState(pantallasAvaliable[0].name);

    const [buttonDisabled, setButtonDisabled] = useState(false);

    const [sendedNotifications, setSendedNotification] = useState(false);

    const [news, setNews] = useState([]);
    const [newsID, setNewsID] = useState("");

    useEffect(() => {   // Manejo si la pantalla seleccionada es noticias individuales
        (async() => {
            if(screen === "IndividualNews" && !news.length) {
                let newsRef = collection(db, 'news');
                const q = query(newsRef, limit(10));
                let newsQ = await getDocs(q);
                let newsT = [];
                newsQ.forEach(doc =>  {
                    newsT.push(doc.data());
                });
                setNews(newsT);
            } else {
                setNewsID("");
            }
        })()
    }, [screen]);


    async function sendNotificationF(info) {
            let sendToApi = {};
            let userRef = collection(db, 'users');
            const q = query(userRef, where("tokenStatus", "==", true));
            let usersQ = await getDocs(q);
            let usersToSendNotification = {};

            usersQ.forEach(doc =>  {
                usersToSendNotification[doc.id] = {id: doc.id, token: doc.data().token}
            });
            
            sendToApi["users"] = usersToSendNotification;
            sendToApi["info"] = info;
            
            let response = await fetch(PATH_api_send_notification, {
                method: 'POST',
                body: JSON.stringify(sendToApi)
            });
            let result = await response.json();

            return result;
    }

     function ChangeUserTokenStatus() {
        let ResultErrorDiviceNoRegistered = sendedNotifications.DiviceNoRegisterUserId;
        if(!ResultErrorDiviceNoRegistered.length) {
            alert("No hay usuarios con: DeviceNotRegistered");
            return;
        }
        let promisesToDelete = [];

        ResultErrorDiviceNoRegistered.forEach(el => {
            let userRef = doc(db, "users", el);
            let promesa = updateDoc(userRef, {
                tokenStatus: false
            });

            promisesToDelete.push(promesa);
        });

        Promise.all(promisesToDelete).then(response => {
            alert("Estado de token actualizados");
        });
    }


    const sendNotificationNow = async () => {
        let notificationData = {};
        // COMPROBACIONES BASICAS --------------------------------
        if(titleNotification.trim().length < 4) {
            alert("Inserta el titulo de la notificacion");
            return;
        }

        if(screen == "IndividualNews") {
            if(!newsID.length) {
                alert("Elige una noticia");
                return;
            }
            notificationData = news.filter(el => el.id == newsID)[0];
        }
        // -------------------------------------------------------
        setButtonDisabled(true);
        setSendedNotification(false);

        let infoToNotification = {};
        infoToNotification["screen"] = screen;
        infoToNotification["title"] =  titleNotification;
        infoToNotification["description"] = descriptionNotification;
        infoToNotification["data"] = notificationData;

        // ENVIAR NOTIFICACION
        setSendedNotification(true);
        let responseOfSendNotification = await sendNotificationF(infoToNotification);
        setSendedNotification(responseOfSendNotification);

        setButtonDisabled(false);
        setNewsID("");
    }


    return(
        <div style={{flexDirection: 'column', display: 'flex', flex: 1}}>
            <APPmenu/>

            <div className="containerInfoApp">
                <div style={{flexDirection: 'column', display: 'flex'}}>
                    <h2>Notificaciones</h2>
                    
    
                    <div className="input-single-container">
                        <span>Titulo de la notificacion:</span>
                        <input value={titleNotification} onChange={(e) => setTitleNotification(e.target.value)} placeholder="Titulo notificacion"></input>
                    </div>    

                    <div className="input-single-container">
                        <span>Descripcion de la notificacion:</span>
                        <input value={descriptionNotification} onChange={(e) => setDescriptionNotification(e.target.value)} placeholder="Descripcion notificacion"></input>
                    </div> 

                    <div className="input-single-container">
                        <span>Pantalla:</span>
                        <select name="cars" id="cars" style={{padding: 10}} onChange={e => setScreen(e.target.value)}>
                            {pantallasAvaliable.map(el => <option key={el.name} value={el.name}>{el.name} -- {el.info}</option>)}
                        </select>
                    </div> 

                    {screen == "IndividualNews" ?
                    <div className="input-single-container">
                        <span>Selecciona la noticia:</span>
                        <select name="cars" id="cars" style={{padding: 10}} onChange={e => setNewsID(e.target.value)}>
                            {news.map(el => <option key={el.id} value={el.id}>{el.title}</option>)}
                        </select>
                    </div> 
                    : null}
                 </div>


                    <button disabled={buttonDisabled} onClick={sendNotificationNow} className="button-save">Enviar</button>
                    
                    {sendedNotifications ?
                        <div className="input-single-container" style={{backgroundColor: 'yellow', padding: 10, marginTop: 20}}>
                            <h4>Resultado Notificaciones:</h4>
                            {sendedNotifications === true ? 
                            <h4>Enviando...</h4> 
                            : 
                            <>
                                <ul style={{margin: 20}}>
                                    <li>Enviadas: {sendedNotifications.notificationsSended}</li>
                                    <li>Arrivadas: {sendedNotifications.notificationSuccess}</li>
                                    <li>Fallidas: {sendedNotifications.notificationsError} - <span style={{fontWeight: 'bold', color: 'red'}}>DeviceNotRegistered: {sendedNotifications.DeviceNotRegisteredCount}</span></li>
                                    {sendedNotifications.errorChunk ? <li>Error chunk: {sendedNotifications.errorChunk} (Error al enviar 1000 notificaciones)</li> : null}
                                </ul>
                                <hr style={{margin: 10}}></hr>
                                <span style={{margin: 15, marginBottom: 0}}>Presionar este boton si deseo no enviar mas token a los usuario con resultado DeviceNotRegistered de esta notificacion</span>
                                <button  className="button-delete-tokens" onClick={ChangeUserTokenStatus}>CAMBIAR ESTADO DE TOKENS</button>
                            </>
                            }
                        </div>
                    : null}
                </div>
            </div>
    )
}

export default Notificaciones;