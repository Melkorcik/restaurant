import ListMenu from './List_Menu/ListMenu';
import './Menu.css';

export default function Menu(){
    return(
        <section className="container-menu">
            <h1 className="title-menu"><strong>Меню</strong></h1>
                <span className="content-menu">
                    В нашем меню блюда русской и европейской кухни гармонично существуют в
                    одном пространстве.
                    Будь то завтрак, деловой обед, ужин в честь важного события - здесь Вы
                    найдете меню для любого момента в Вашей жизни.
                </span>
            <ListMenu/>
        </section>
    )
}