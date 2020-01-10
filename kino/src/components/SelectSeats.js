import React, { Component } from 'react';
import './SelectSeats.css';

class SelectSeats extends Component {
    render() {
        return (
            <>
                <div className="wrap">
                    <div className="screen">Ekran</div>
                    <div className="parent">
                        <div className="seat" id="01"></div>
                        <div className="seat" id="02"></div>
                        <div className="seat" id="03"></div>
                        <div className="seat" id="04"></div>
                        <div className="seat" id="05"></div>
                        <div className="seat" id="06"></div>
                        <div className="seat" id="07"></div>
                        <div className="seat" id="08"></div>
                        <div className="seat" id="09"></div>
                        <div className="seat" id="10"></div>
                        <div className="seat" id="11"></div>
                        <div className="seat" id="12"></div>
                        <div className="seat" id="13"></div>
                        <div className="seat" id="14"></div>
                        <div className="seat" id="15"></div>
                        <div className="seat" id="16"></div>
                        <div className="seat" id="17"></div>
                        <div className="seat" id="18"></div>
                        <div className="seat" id="19"></div>
                        <div className="seat" id="20"></div>
                        <div className="seat" id="21"></div>
                        <div className="seat" id="22"></div>
                        <div className="seat" id="23"></div>
                        <div className="seat" id="24"></div>
                        <div className="seat" id="25"></div>
                        <div className="seat" id="26"></div>
                        <div className="seat" id="27"></div>
                        <div className="seat" id="28"></div>
                        <div className="seat" id="29"></div>
                        <div className="seat" id="30"></div>
                        <div className="seat" id="31"></div>
                        <div className="seat" id="32"></div>
                        <div className="seat" id="33"></div>
                        <div className="seat" id="34"></div>
                        <div className="seat" id="35"></div>
                        <div className="seat" id="36"></div>
                        <div className="seat" id="37"></div>
                        <div className="seat" id="38"></div>
                        <div className="seat" id="39"></div>
                        <div className="seat" id="40"></div>
                        <div className="seat" id="41"></div>
                        <div className="seat" id="42"></div>
                        <div className="seat" id="43"></div>
                        <div className="seat" id="44"></div>
                        <div className="seat" id="45"></div>
                        <div className="seat" id="46"></div>
                        <div className="seat" id="47"></div>
                        <div className="seat" id="48"></div>
                        <div className="seat" id="49"></div>
                        <div className="seat" id="50"></div>
                    </div>
                    <div className="summary">
                        <p>Wybrano miejsc: <span>0</span></p>
                        <p>Cena: <span>0</span> zł</p>
                    </div>
                    <button className="confirm">Zatwierdź wybór</button>
                </div>
            </>
        );
    }


}

export default SelectSeats;
