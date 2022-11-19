import {useState} from 'react';
import APPpenarolmenu from '../../../components/penarol/APPpenarolmenu';
import {db} from '../../../components/penarol/config';
import {doc, setDoc, collection} from 'firebase/firestore'; 

function Canciones(props) {
    const [title, setTitle] = useState("");
    const [lyrics, setLyrics] = useState("");
    const [linkMp3, setLinkMp3] = useState("");

    const publishSound = async () => {
        let titleX = title.trim();
        let lyricsX = lyrics.trim();
        let linkMp3X = linkMp3.trim();

        if(titleX.length < 4 || lyricsX.length < 20 || linkMp3X.length < 10) {
            alert("Completa el formulario correctamente");
            return;
        }

        // INSERTAR CANCION EN LA DB
        let refSoundID = await doc(collection(db, 'sounds'));
        let sound = {id: refSoundID.id, text: lyricsX, title: titleX, audio: linkMp3X};
        const refSound = doc(db, 'sounds', refSoundID.id);
        setDoc(refSound, sound).then(response => {
           alert("Cancion publicada");

            setLyrics("");
            setTitle("");
            setLinkMp3("");
       });
    }

    return(
        <div style={{flexDirection: 'column', display: 'flex', flex: 1}}>
            <APPpenarolmenu/>

            <div className="containerInfoApp">
                <div style={{flexDirection: 'column', display: 'flex'}}>
                    <h2>Canciones</h2>
                    
                    <div className="input-single-container">
                        <span>Titulo:</span>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Titulo de la cancion"></input>
                    </div>
                    
                    <div className="input-single-container">
                        <span>Link MP3:</span>
                        <input value={linkMp3} onChange={(e) => setLinkMp3(e.target.value)} placeholder="Link MP3 de la cancion"></input>
                    </div>

                    <div className="input-single-container">
                        <span>Letra:</span>
                        <textarea value={lyrics} onChange={(e) => setLyrics(e.target.value)} placeholder="Letra de la cancion" style={{height: 400}}></textarea>
                    </div>


                    <button onClick={publishSound} className="button-save">Publicar</button>
                </div>
            </div>
    </div>
    )
}

export default Canciones;