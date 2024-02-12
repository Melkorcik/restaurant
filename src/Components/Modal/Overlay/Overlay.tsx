import './Overlay.css';

export default function Overlay({onClose}:any){
    return(
        <div className="overlay" onClick={() => onClose(false)}></div>
    )
}