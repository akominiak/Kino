const {Reservation, validate} = require('../models/reservation');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const reservations = await Reservation.find();
    res.send(reservations);
});

router.post('/', async (req, res) => {
   
    const newReservation = new Reservation({
        movie: req.body.movie,  
        sits: req.body.sits,
        email: req.body.email,
        hour: req.body.hour,
        date: req.body.date
    });
    await newReservation.save();
    res.send(newReservation);
});

router.delete('/:id', async (req, res) => {
    const reservation = await Reservation.findByIdAndRemove(req.params.id);
    if (!reservation) return res.status(404).send('Reservation not found');
    res.send(reservation);
});

module.exports = router;