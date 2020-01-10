import React, { Component } from 'react';
import './Confirmation.css';
import axios from 'axios';


class Confirmation extends Component {
    state = {
        seats: [],
        formData: []
    }
    componentDidMount = async () => {
        let seats =  this.props.location.seatsState.selectedSeats;
        let reservation = this.props.location.seatsState.formState.location.formState;
        console.log(reservation);
        console.log(seats);
        this.setState({seats: seats,
            formData: reservation
        });
        
        axios.post('http://localhost:8080/reservation',{           
            data: {
                movie: this.state.formData.movie,  
                sits: this.state.seats.join([',']),
                email: this.state.formData.email,
                hour: this.state.formData.hour,
                date: ''
              }
        })
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
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

