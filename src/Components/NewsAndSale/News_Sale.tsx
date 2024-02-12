import News from './News/News';
import './News_Sale.css';

export default function News_Sale(){
    return(
        <section className="news-sale-container">
            <h1 className="news-sale-title"><strong>Новости и акции</strong></h1>
            <News/>
        </section>
    )
}