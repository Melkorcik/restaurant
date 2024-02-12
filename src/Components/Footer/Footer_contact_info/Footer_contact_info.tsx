import './Footer_contact_info.css';
import imagel from '../../../../public/imageL.png';

export default function Contact_Info(){
    return(
        <div className="footer-contact-info">
            <h1 className="footer-main-title">КОНТАКТЫ</h1>
            <span className="footer-description-box">
                <h3 className="footer-address">НАШ АДРЕС</h3>
                <p>Россия, г. Псков, ул. Кузнецкая, дом 2</p>
                <h3 className="footer-phone">ТЕЛЕФОНЫ</h3>
                <p>+7 (8112)293-60-12</p>
                <h3 className="footer-email">ПОЧТА</h3>
                <p>restaurant@email.ru</p>
                <h3 className="footer-time-work">ВРЕМЯ РАБОТЫ</h3>
                <span className="mode-work">
                    воскресенье - четверг
                    12:00-23:00,
                    пятница - суббота
                    12:00-00:00
                    лобби-бар и рум-сервис КРУГЛОСУТОЧНО
                </span>
                <img src={imagel} alt="img" className="imgl"/>
            </span>
        </div>
    )
}