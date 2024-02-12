import './Footer_map.css';

export default function Map(){
    return(
        <div className="footer-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11493.226525995344!2d12.435354964155321!3d43.93232733744024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132cecb66472a10f%3A0xa00f39bf7a0f0c0!2zNDc4OTAg0KHQsNC9LdCc0LDRgNC40L3Qvg!5e0!3m2!1sru!2sru!4v1707742439892!5m2!1sru!2sru" 
            width="600" 
            height="450" 
            loading="lazy"
            >
            </iframe>
        </div>
    )
}