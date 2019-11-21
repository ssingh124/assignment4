const express = require('express');
// const app = express();
const router = express.Router();

const {getSongs} = require('../controller/songController.js');

const {postSongs} = require('../controller/songController.js');

const {getAlbumSongs} = require('../controller/songController.js');

router.get('/', getSongs);
router.post('/', postSongs);
router.get('/album-songs',getAlbumSongs);


exports.songRouter = router;