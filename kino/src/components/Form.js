import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
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
                        <input type="submit" value="Wybierz miejsca" />
                    </form>
                </main>
                <hr />
            </>
        );
    }
}

export default Form;