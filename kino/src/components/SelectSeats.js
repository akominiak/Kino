import React, { Component } from 'react';
import './SelectSeats.css';
import { Link } from 'react-router-dom';

class SelectSeats extends Component {

    state = {
        selectedSeats: []
    }

    selectSeat = (seat,e) => {
        if(!this.state.selectedSeats.includes(seat)) {
        this.setState({selectedSeats: [...this.state.selectedSeats,seat]});
        e.target.style.background = 'cadetblue';
        }
        else{
            let newSeats = this.state.selectedSeats.filter(s => s !== seat);
            this.setState({selectedSeats: newSeats});
            e.target.style.background = 'darkolivegreen';
        }
    }

    render() {
        return (
            <>
                <div className="wrap">
                    <div className="screen">Ekran</div>
                    <div className="parent">
                        <div className="seat" onClick={this.selectSeat.bind(this, 1)} id="01"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 2)} id="02"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 3)} id="03"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 4)} id="04"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 5)} id="05"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 6)} id="06"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 7)} id="07"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 8)} id="08"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 9)} id="09"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 10)} id="10"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 11)} id="11"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 12)} id="12"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 13)} id="13"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 14)} id="14"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 15)} id="15"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 16)} id="16"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 17)} id="17"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 18)} id="18"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 19)} id="19"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 20)} id="20"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 21)} id="21"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 22)} id="22"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 23)} id="23"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 24)} id="24"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 25)} id="25"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 26)} id="26"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 27)} id="27"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 28)} id="28"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 29)} id="29"></div>
                        <div className="seat" onClick={this.selectSeat.bind(this, 30)} id="30"></div>
                        <div className="seat"onClick={this.selectSeat.bind(this, 31)} id="31"></div>
                        <div className="seat"onClick={this.selectSeat.bind(this, 32)} id="32"></div>
                        <div className="seat"onClick={this.selectSeat.bind(this, 33)} id="33"></div>
                        <div className="seat"onClick={this.selectSeat.bind(this, 34)} id="34"></div>
                        <div className="seat"onClick={this.selectSeat.bind(this, 35)} id="35"></div>
                        <div className="seat"onClick={this.selectSeat.bind(this, 36)} id="36"></div>
                        <div className="seat"onClick={this.selectSeat.bind(this, 37)} id="37"></div>
                        <div className="seat"onClick={this.selectSeat.bind(this, 38)} id="38"></div>
                        <div className="seat"onClick={this.selectSeat.bind(this, 39)} id="39"></div>
                        <div className="seat"onClick={this.selectSeat.bind(this, 40)} id="40"></div>
                        <div className="seat"onClick={this.selectSeat.bind(this, 41)} id="41"></div>
                        <div className="seat"onClick={this.selectSeat.bind(this, 42)} id="42"></div>
                        <div className="seat"onClick={this.selectSeat.bind(this, 43)} id="43"></div>
                        <div className="seat"onClick={this.selectSeat.bind(this, 44)} id="44"></div>
                        <div className="seat"onClick={this.selectSeat.bind(this, 45)} id="45"></div>
                        <div className="seat"onClick={this.selectSeat.bind(this, 46)} id="46"></div>
                        <div className="seat"onClick={this.selectSeat.bind(this, 47)} id="47"></div>
                        <div className="seat"onClick={this.selectSeat.bind(this, 48)} id="48"></div>
                        <div className="seat"onClick={this.selectSeat.bind(this, 49)} id="49"></div>
                        <div className="seat"onClick={this.selectSeat.bind(this, 50)} id="50"></div>
                    </div>
                    <div className="summary">
                        <p>Wybrano miejsc: <span>{this.state.selectedSeats.length}</span></p>
                        <p>Cena: <span>{this.state.selectedSeats.length * 15}</span> zł</p>
                    </div>
                    {/* <button className="confirm">Zatwierdź wybór</button> */}
                    <Link to="/confirm" className="confirm">Zatwierdź wybór</Link>
                </div>
            </>
        );
    }
    
}

export default SelectSeats;
