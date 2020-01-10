import React, { Component } from 'react';
import './Confirmation.css';

class Confirmation extends Component {
    render() {
        return (
            <>
                <div className="wrapConfirm">
                    <p>Potwierdzenie rezerwacji zostało wysłane na adres e-mail.</p>
                </div>
            </>
        );
    }
}

export default Confirmation;

