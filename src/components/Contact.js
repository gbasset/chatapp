import React from 'react';

import './Contact.css';


const Contact = (props) => {
    return (
        <div className="Contact">
            <img 
                    className="avatar"
                    src= {props.avatar}
                    alt= {props.alt}
            />
        
        <div>
            <div className="name">{props.name}</div>
                
            <div className="status">
                 <div className="status-text">
                 <div className={props.online ? "status-online" : "status-offline"}></div>
                    {props.online ? "online" : "offline"}
                </div>

            </div>

        </div>
    
        </div>

    );
}
export default Contact;