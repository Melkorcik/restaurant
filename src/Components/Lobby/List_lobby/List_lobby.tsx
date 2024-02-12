import { useState, useEffect } from "react";
import ITypeLobby from "../../../Types/ITypeLobby";
import './List_lobby.css';

export default function List_lobby(){
    const[lobby, setLobby] = useState<ITypeLobby[]>([]);

    useEffect(()=>{
        fetch('http://localhost:1098/lobby-bar')
        .then(response => response.json())
        .then(data => setLobby(data))
        .catch(err => console.error(err))
    },[])

    return(
        <div style={{display:'flex', marginInline:'auto', width:'1300px', justifyContent:'space-between'}}>
            {
                lobby.map(e => {
                    return(
                        <div key={e.id}>
                            <div style={{position:'relative'}}>
                                <img src={e.img_lobby_bar} alt="img" className="img-lobby"/>                                
                                    <div className="lobby-description">
                                        <h1 className="lobby-title-card">{e.title_lobby_bar}</h1>
                                        <p className="lobby-description-card">{e.description_lobby_bar}</p>
                                    </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}