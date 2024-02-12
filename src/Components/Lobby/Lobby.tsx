import List_lobby from './List_lobby/List_lobby';
import './Lobby.css';

export default function Lobby(){
    return(
        <section className="lobby-container">
            <h3 className="lobby-title"><strong>ЛОББИ-БАР</strong></h3>
            <List_lobby/>
        </section>
    )
}