import { useState, useEffect } from "react";
import ITypeNews from "../../../Types/ITypeNews";
import './News.css';

export default function News(){
    const[news, setNews] = useState<ITypeNews[]>([]);

    useEffect(()=>{
        fetch('http://localhost:1098/news')
        .then(response => response.json())
        .then(data => setNews(data))
        .catch(err => console.error(err))
    },[])

    return(
        <div>
            {
                news.map((e, i) => {
                    var imgClass = `news-img-box${i}`, descriptionClass = `news-description-box${i}`;
                    return(
                        <div key={e.id} className="news-box">
                            <div className={imgClass}>
                                <img src={e.img_news} alt="img" className="news-img"/>
                            </div>
                            <div className={descriptionClass}>
                                <h1 className="news-title-des">{e.title_news}</h1>
                                <p className="news-description-des">{e.description_news}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}