const { response, request } = require('express');
const { tracksModel } = require('../models')

const getTracks = (req = request, res = response) => {
    res.send({
        ok: true,
        message: 'Todo salio bien'
    })
}
const getTrack = (req = request, res = response) => { }
const createTrack = (req = request, res = response) => {
}
const updateTrack = (req = request, res = response) => { }
const deleteTrack = (req = request, res = response) => { }


module.exports = { getTracks, getTrack, createTrack, updateTrack, deleteTrack }