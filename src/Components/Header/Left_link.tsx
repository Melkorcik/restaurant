import left_list from "./data_arr/left_list"

export default function Left_link({onClose}:any){

    return(
        <ul className="list">
              {
                left_list.map(e => <li key={e} className="link-list"><a className="link-a-menu" 
                onClick={e => 
                  e.currentTarget.textContent === 'ЗАБРОНИРОВАТЬ СТОЛИК' 
                  ? onClose(true) 
                  : onClose(false)}>{e}</a></li>)
              }
        </ul>
    )
}