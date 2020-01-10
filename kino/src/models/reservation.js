const Joi = require('joi');
const mongoose = require('mongoose');

const reservation = new mongoose.Schema({
    movie: {
        type: String,
        required: true,
    },
    sits: {
        type: String,
        required: true,
    },
    email:{
        type: String, 
        required: true
    },
    hour: {
        type: String, 
        required:true
    },
    date: {
        type: Date
    }
});
function validateReservation(newReservation) {

    const schema = {
        movie: Joi.String().required(),
        email: Joi.String().required(),
        sits: Joi.String().required()
    };

    return Joi.validate(newReservation, schema);
}

const Reservation = mongoose.model('Reservation', reservation);

module.exports.validate = validateReservation;
module.exports.Reservation = Reservation;