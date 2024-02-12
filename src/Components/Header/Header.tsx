import ITypeHeight from '../../Types/ITypeHeight';
import Modal from '../Modal/Modal';
import Left_link from './Left_link';
import Right_link from './Right_link';
import Logo from './Logo';
import Contacts from './Contacts';
import './style_header.css';     
import { useState } from 'react';

export default function Header({headerHeight}:ITypeHeight){
    const[isCloseModalWindow, setIsCloseModalWindow] = useState(false);

    const onClose = (ValueBool:boolean) => setIsCloseModalWindow(ValueBool);

    return(
        <header style={{height:headerHeight}} className="header">  
            <Contacts/>
            <Left_link onClose={onClose}/>
            <Logo/>
            <Right_link/> 
            {isCloseModalWindow && <Modal onClose={onClose}/>}                        
        </header>      
    )
}