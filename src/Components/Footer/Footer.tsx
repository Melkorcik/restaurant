import Map from './Footer_map/Footer_map';
import Contact_Info from './Footer_contact_info/Footer_contact_info';
import './Footer.css';

export default function Footer(){
    return(
        <footer className="footer-container">
            <div className="footer-box-infos">
                <Contact_Info/>
                <Map/>
            </div>
            <div className="footer-additionally">
                &copy; 2024 Отлеь Покровский
            </div>
        </footer>
    )
}