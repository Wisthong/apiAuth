const { Router } = require('express');
const { getTracks, getTrack, deleteTrack, updateTrack, createTrack } = require('../controllers/tracks');
const router = Router();

router.get('/', getTracks)
router.get('/:id', getTrack)
router.post('/', createTrack)
router.delete('/:id', deleteTrack)
router.put('/:id', updateTrack)

module.exports = router 
