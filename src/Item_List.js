import React from 'react';
import './Item_List.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Item_List(props) {
    const items = props.items;
    const Item_List = items.map(item => {
        return <div className="list" key="item.key">
            <p>
                <input type="text" id={item.key} value={item.text} onChange={(e) => {
                    props.setUpdate(e.target.value, item.key)
                }} />
                <span>

                    <FontAwesomeIcon className="faicons" onClick={() => {
                        props.deleteItem(item.key)
                    }} icon="trash" />
                </span>
            </p>
        </div>
    })
    return (
        <div>{Item_List}</div>

    )
}
export default Item_List;