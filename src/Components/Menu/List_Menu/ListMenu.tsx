import { useEffect, useState } from "react";
import ITypeMenu from "../../../Types/ITypeMenuRequest";
import './List_Menu.css';

export default function ListMenu(){
    const[menu, setMenu] = useState<ITypeMenu[]>([]);

    useEffect(()=>{
        fetch('http://localhost:1098/menu')
        .then(response => response.json())
        .then(data => setMenu(data))
        .catch(err => console.log(err))
    },[])
         
    return(
        <div style={{display:'block',marginTop:'50px', marginLeft:'19px'}}>
            {
                menu.map((e, i) => {
                    var imgClass = `menu-img-view${i}`, infoClass=`menu-text-information${i}`, btn=`menu-button-second-from-list${i}`;
                    return(
                        <div key={e.id} className="cards-menu">
                                <div className={imgClass}>
                                    <img src={e.img_food} className="menu-image-from-list"/>
                                </div>
                                <div className={infoClass}>
                                    <h1 className="menu-title-from-list">{e.title_menu}</h1>
                                    <p className="menu-description-from-list">{e.description_menu}</p>
                                    <p className="menu-button-first-from-list">{e.button_menu_first}</p>
                                    <p className={btn}>{e.button_menu_second}</p>
                                </div>
                        </div>                        
                    )
                })
            }
        </div>
    )
}