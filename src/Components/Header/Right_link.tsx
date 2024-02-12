import right_list from "./data_arr/right_list"

export default function Right_link(){
    return(
        <ul className="list">
              {
                right_list.map(e => <li key={e} className="link-list"><a className="link-a-menu">{e}</a></li>)
              }
        </ul>
    )
}