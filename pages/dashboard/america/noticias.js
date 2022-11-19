import {useState, useEffect} from 'react';
import APPmenu from '../../../components/america/APPmenu';
import {db, PATH_api_send_notification} from '../../../components/america/config';
import {doc, setDoc, collection, getDocs, query, where, updateDoc, serverTimestamp} from 'firebase/firestore'; 


function Noticias(props) {
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [image, setImage] = useState("");

    const [showInApp, setShowInApp] = useState(false);
    const [showHeader, setShowHeader] = useState(false);

    const [sendNotification, setSendNotification] = useState(true);
    const [titleNotification, setTitleNotification] = useState("");
    const [descriptionNotification, setDescriptionNotification] = useState("");

    const [buttonDisabled, setButtonDisabled] = useState(false);

    const [sendedNotifications, setSendedNotification] = useState(false);

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

    useEffect(() => {
        if(title.trim().length > 4 && image.trim().length > 4) {
            setShowInApp(true);
            setShowHeader(true);
        } else if(showInApp) {
            setShowInApp(false);
            setShowHeader(false);
        }
    }, [title, image])

    const publishNews = async () => {
        // COMPROBACIONES BASICAS --------------------------------
        if(link.trim().length < 10) {
            alert("Inserta el link de la noticia");
            return;
        }
        if(title.trim().length < 4 && titleNotification.trim().length < 4) {
            alert("Inserta el titulo de la noticia o de la notificacion para que la noticia puede ser publicada");
            return;
        }
        // -------------------------------------------------------
        setButtonDisabled(true);
        setSendedNotification(false);

        let infoToFirebase = {};
            infoToFirebase["title"] = title.trim();
            infoToFirebase["link"] = link.trim();
            infoToFirebase["img"] = image.trim();
            infoToFirebase["showInApp"] = showInApp;
            infoToFirebase["showHeader"] = showHeader;
            infoToFirebase["date"] = serverTimestamp();
            let refNewsID = await doc(collection(db, 'news'));
            infoToFirebase["id"] = refNewsID.id;

            const refNews = doc(db, 'news', refNewsID.id);
            await setDoc(refNews, infoToFirebase);
            alert("Noticia publicada");
            setTitle("");
            setLink("");
            setImage("");
            setShowInApp(false);
            setShowHeader(false);
            setSendNotification(true);
            setTitleNotification("");
            setDescriptionNotification("");
        
        if(sendNotification) {
            let infoToNotification = {};
            infoToNotification["screen"] = "IndividualNews";
            infoToNotification["title"] = titleNotification.length ? titleNotification : title;
            infoToNotification["description"] = descriptionNotification;
            infoToNotification["data"] = infoToFirebase;

            console.log("INFORMACON NOTIFICACON: ", infoToNotification);

            // ENVIAR NOTIFICACION
            setSendedNotification(true);
            let responseOfSendNotification = await sendNotificationF(infoToNotification);
            setSendedNotification(responseOfSendNotification);
        }

        setButtonDisabled(false);
    }


    return(
        <div style={{flexDirection: 'column', display: 'flex', flex: 1}}>
            <APPmenu/>

            <div className="containerInfoApp">
                <div style={{flexDirection: 'column', display: 'flex'}}>
                    <h2>Noticias</h2>

                    <div className="input-single-container">
                        <span>Titulo de la noticia:</span>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titulo de la noticia"></input>
                    </div>
                    
                    <div className="input-single-container">
                        <span>Link de la noticia:</span>
                        <input value={link} onChange={(e) => setLink(e.target.value)} placeholder="Link de la noticia"></input>
                    </div>

                    <div className="input-single-container">
                        <span>Imagen URL de la noticia:</span>
                        <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Imagen principal de la noticia"></input>
                    </div>

                    {image.trim().length > 4 && title.trim().length > 4 ?        
                    <div className="input-single-container">
                        <span style={{fontSize: 14}}>¿Esta noticia aparecera en la APP?</span>
                        <span style={{paddingLeft: 10, color: 'blue'}}>Si aparecera en donde salen todas las noticias</span>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <div style={{display: 'flex', flexDirection: 'row', padding: 10}}>
                                <span style={{marginRight: 10}}>Si</span>
                                <input checked={showInApp} onChange={(e) => setShowInApp(true)} type="checkbox"></input>
                            </div>

                            <div style={{display: 'flex', flexDirection: 'row', padding: 10}}>
                                <span style={{marginRight: 10}}>No</span>
                                <input checked={!showInApp} onChange={(e) => setShowInApp(false)} type="checkbox"></input>
                            </div>
                        </div>
                    </div>
                    : null}

                    {image.trim().length> 4 && title.trim().length > 4 ?        
                    <div className="input-single-container">
                        <span style={{fontSize: 14}}>¿Esta noticia mostrara cabecera nativa?</span>
                        <span style={{paddingLeft: 10, color: 'blue'}}>Si es link propio mejor dejarlo en SI, si es link de otra web  tal vez sea recomendado ocultar la cabecera para evitar 2 cabecera</span>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <div style={{display: 'flex', flexDirection: 'row', padding: 10}}>
                                <span style={{marginRight: 10}}>Si</span>
                                <input checked={showHeader} onChange={(e) => setShowHeader(true)} type="checkbox"></input>
                            </div>

                            <div style={{display: 'flex', flexDirection: 'row', padding: 10}}>
                                <span style={{marginRight: 10}}>No</span>
                                <input checked={!showHeader} onChange={(e) => setShowHeader(false)} type="checkbox"></input>
                            </div>
                        </div>
                    </div>
                    : null}
                    
                    <div className="input-single-container" style={{backgroundColor: 'yellow', padding: 10}}>
                        <span style={{fontWeight: 'bold'}}>¿Enviar Notificacion PUSH?</span>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <div style={{display: 'flex', flexDirection: 'row', padding: 10}}>
                                <span style={{marginRight: 10}}>Si</span>
                                <input checked={sendNotification} onChange={(e) => setSendNotification(true)} type="checkbox"></input>
                            </div>

                            <div style={{display: 'flex', flexDirection: 'row', padding: 10}}>
                                <span style={{marginRight: 10}}>No</span>
                                <input checked={!sendNotification} onChange={(e) => setSendNotification(false)} type="checkbox"></input>
                            </div>
                        </div>
                        
                        {sendNotification ?
                            <>
                                <div className="input-single-container">
                                    <span>Titulo de la notificacion: (si es vacio sera el titulo del post)</span>
                                    <input value={titleNotification} onChange={(e) => setTitleNotification(e.target.value)} placeholder="Titulo notificacion"></input>
                                </div>    

                                <div className="input-single-container">
                                    <span>Descripcion de la notificacion:</span>
                                    <input value={descriptionNotification} onChange={(e) => setDescriptionNotification(e.target.value)} placeholder="Descripcion notificacion"></input>
                                </div> 
                            </>
                        : null}
                    </div>


                    <button disabled={buttonDisabled} onClick={publishNews} className="button-save">Publicar</button>
                    
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
        </div>
    )
}

export default Noticias;