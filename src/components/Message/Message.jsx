import React from 'react';
import s from './Message.module.css'

const MessageItem = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Message = () => {

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hello bratan!!"},
        {id: 3, message: "How are you, brat?"},
        {id: 4, message: "Dobre"},
        {id: 5, message: "Dobre"}
    ]

    let messagesElements = messages
        .map(m => <MessageItem message={m.message}/>);

    return (
        <div className={s.messages}>
            {messagesElements}
        </div>
    );
}

export default Message;