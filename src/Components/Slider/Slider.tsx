import './style_slider.css';
import Carousel from 'react-material-ui-carousel';
import Item from './Items';
import IMAGES_SLIDER from './ImgArray';

export default function Example()
{
    return (
        <Carousel>
            {
                IMAGES_SLIDER.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>        
    )
}