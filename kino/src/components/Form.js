import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { feedback: '', name: 'Name', email: 'email@example.com' };
        this.handleSubmit = this.handleSubmit.bind(this);
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
                            <option value="option1">Gwiezdne Wojny: Skywalker. Odrodzenie</option>
                            <option value="option2">Jak zostałem GANGSTERem. Historia prawidziwa.</option>
                            <option value="option3">Jumanji: Następny poziom</option>
                            <option value="option4">Psy 3. W imię zasad</option>
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
                        <input type="submit" value="Wybierz miejsca" onClick={this.handleSubmit} />
                    </form>
                </main>
                <hr />
            </>
        );
    }
    handleSubmit(event) {
        const templateId = 'template_id';

        this.sendFeedback(templateId, { message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email })
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