const express = require('express');
// const app = express();
const router = express.Router();

const {getAlbums} = require('../controller/albumController.js');
const {postAlbums} = require('../controller/albumController.js');


router.get('/', getAlbums);
router.post('/', postAlbums);


exports.albumRouter = router;