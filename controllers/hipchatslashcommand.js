'use strict';

const HipChatSlashCommand = require('../models/hipchatslashcommand.js');

function processInput(req, res, next) {
  const slashCommand = new HipChatSlashCommand(_parseInput(req, res, next));

};

function _returnMessage(req, res, next) {
  const slashCommand = _parseInput(req, res, next);
  res.json({message: slashCommand.getRawMessage()});
};

function _parseInput(req, res, next) {
  const mentionName = req.body.item.message.from.mention_name;
  const name = req.body.item.message.from.name;

  const mentions = req.body.item.message.mentions;
  let rawMessage = req.body.item.message.message.split(' ');
  rawMessage.shift();

  const params = {
    mentionName: mentionName,
    name: name,
    mentions: mentions,
    rawMessage: rawMessage
  };

  return params;
};


module.exports = {
  processInput: processInput
};
