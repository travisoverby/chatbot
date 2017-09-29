'use strict';

const HipChatSlashCommand = require('../controllers/hipchatslashcommand.js');
const express = require('express');
const router = express.Router();

router.post('/hipchat', HipChatSlashCommand.returnMessage);

module.exports = router;
