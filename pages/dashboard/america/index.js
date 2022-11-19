import {useState, useEffect} from 'react';
import APPmenu from '../../../components/america/APPmenu';
import {db} from '../../../components/america/config';
import {doc, setDoc, getDoc} from 'firebase/firestore'; 

function Index(props) {
    const [note, setNote] = useState(null);


    useEffect(() => {
        let refNota = doc(db, 'notas', 'nota');
        getDoc(refNota).then(response => {
            if(response.data()) {
                setNote(response.data().text);
            } else {
                setNote("");
            }
        });
    }, []);

    const saveNote =  () => {
        let nota = {text: note};
        const refNota = doc(db, 'notas', 'nota');
        setDoc(refNota, nota).then(response => {
           alert("Nota Guarada");
       });
    }

    return(
        <div style={{flexDirection: 'column', display: 'flex', flex: 1}}>
            <APPmenu/>

            <div className="containerInfoApp">
                <div style={{flexDirection: 'column', display: 'flex'}}>
                    <h2>Notas</h2>
                    {note === null ? <span style={{padding: 20, backgroundColor: 'beige', marginTop: 10}}>Cargando...</span> : <textarea value={note} onChange={(e) => setNote(e.target.value)} style={{maxWidth: 800, marginTop: 20, width: '100%', fontSize: 20, height: 350, padding: 10}}></textarea>}
                    <button onClick={saveNote} className="button-save">Guardar</button>
                </div>
            </div>
        </div>
    )
}

export default Index;