import React, { Component } from 'react';
import axios from 'axios';
import './Form.css';
import { Link } from 'react-router-dom';

class Form extends Component {

    state = {
        movies: [],
        email: '',
        movie: '',
        hour: '',
        date: ''
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
                        <select name="movie" id="select-movie-id"  onChange={this.handleChange }>
                            {this.getOptions()}
                        </select>
                        <label htmlFor="time">Wybierz godzinę:</label>
                        <select name="time" id="select-hour-id" onChange={this.handleChange }>
                            <option value="option1">10:00</option>
                            <option value="option2">16:30</option>
                            <option value="option3">18:10</option>
                            <option value="option4">21:15</option>
                        </select>
                        <label htmlFor="email">Wpisz swój adres e-mail:</label>
                        <input type="text" name="email" id="" onChange={this.handleChange.bind(this, 'email')} />
                        {/* <input type="submit" value="Wybierz miejsca" onClick={this.handleSubmit} /> */}
                        <Link to={{ 
                        pathname: "/seats", 
                        formState: this.state }}     
                        className="button" 
                        onClick={this.handleSubmit}
                        >Zarezerwuj miejsca</Link>
                    </form>
                </main>
                <hr />
            </>
        );
    }

    handleChange = (type, e) => {
        if(type==="email"){
            this.setState({email: e.target.value});
        }
      var movie = document.getElementById("select-movie-id");
      this.setState({movie: movie.options[movie.selectedIndex].text});
      var hour = document.getElementById("select-hour-id");
      this.setState({hour: hour.options[hour.selectedIndex].text});
    }

    handleSubmit = (event) =>{
        console.log('udalo sie');
     //   console.log(this.state);
        //  const templateId = 'template_id';
       // this.sendFeedback(templateId, { message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email })
    }

    sendFeedback(templateId, variables) {
        window.emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
}

export default Form;