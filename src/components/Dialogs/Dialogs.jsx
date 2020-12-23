import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: "Alica Freeman"},
        {id: 2, name: "Josefina"},
        {id: 3, name: "Velazquez"},
        {id: 4, name: "Barrera"}
    ]
    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
        </div>
    );
}

export default Dialogs;