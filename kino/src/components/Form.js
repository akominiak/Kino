import React, { Component } from 'react';
import axios from 'axios';
import './Form.css';

class Form extends Component {

    state = {
        movies: []
      }
    
      componentDidMount() {
        const url = 'http://localhost:8080/';
        axios.get(url + 'movie')
        .then(res => this.setState({movies: res.data}));
      }

      getOptions() {
       return this.state.movies.map((movie) => (
            <option>{movie.title}</option>
        ))
      }

    render() {
        return (
            <>
                <main>
                    <form action="">
                        <label htmlFor="date">Wybierz dzień:</label>
                        <input type="date" name="date" id="" />
                        <label htmlFor="movie">Wybierz film:</label>
                        <select name="movie" id="">
                            {this.getOptions()}
                        </select>
                        <label htmlFor="time">Wybierz godzinę:</label>
                        <select name="time" id="">
                            <option value="option1">10:00</option>
                            <option value="option2">16:30</option>
                            <option value="option3">18:10</option>
                            <option value="option4">21:15</option>
                        </select>
                        <label htmlFor="email">Wpisz swój adres e-mail:</label>
                        <input type="text" name="email" id="" />
                        <input type="submit" value="Wybierz miejsca" />
                    </form>
                </main>
                <hr />
            </>
        );
    }
}

export default Form;