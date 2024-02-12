import img from '../../../public/free-icon-food-12762082.png';

export default function Logo(){
    return(
        <div className="title-logo">
            <img src={img} className="image-logo"/>
            <h3 className="hotel">Отель</h3>
            <h1 className="hotel-name">Покровский</h1>
        </div>
    )
}