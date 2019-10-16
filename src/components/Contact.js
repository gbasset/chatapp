import React from 'react';

import './Contact.css';


class Contact extends React.Component {
    constructor (props) {
        super(props);
        this.state ={online: false };
        }

    handleClick =(event) => {
        this.setState({
            online: !this.state.online
        })
    }

    render () {
    return (
        <div className="Contact">
            <img 
                    className="avatar"
                    src= {this.props.avatar}
                    alt= {this.props.alt}
            />
        
        <div>
            <div className="name">{this.props.name}</div>
                
            <div className="status">
                 <div className="status-text">
                     
                 <div onClick={this.handleClick} className={this.state.online ? "status-online" : "status-offline"}> </div>
                    {this.state.online ? "online" : "offline"}
                </div>

            </div>

        </div>
    
        </div>

    )
    }
}

export default Contact;
