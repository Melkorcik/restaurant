import { createPortal } from 'react-dom';
import Overlay from './Overlay/Overlay';
import './modal_style.css';

export default function Modal({onClose}:any){
    const modalElement:any = document.getElementById('modal');
    return createPortal(
        (
            <>
                <form className="form">
                        <h3 className='title-modal'>Бронирование столика</h3>
                        
                        <input type="text" placeholder="Имя" className='name-input-modal'/>
                        <input type="number" placeholder="Контактный телефон" className='number-input-modal'/>
                        <input type="email" placeholder="E-mail адрес" className='email-input-modal'/>
            
                        <div style={{display:'flex', justifyContent:'space-around'}}>
                            <input type="date" className='date-input-modal'/> <input type="time" className='time-input-modal'/>
                        </div>
            
                        <input type="number" placeholder="Количество человек" className='human-input-modal'/>
                        <textarea placeholder="Ваши пожелания" className='comments-textarea-modal'></textarea><br/>
            
                        <div style={{display:'flex', justifyContent:'space-around'}}>
                            <button className='btn-modal'><strong>Забронировать</strong></button>
                            <button onClick={() => onClose(false)} className='btn-modal'><strong>Закрыть</strong></button>
                        </div>
                </form>
                <Overlay onClose={onClose}/>
            </>
        ), modalElement
    )
}