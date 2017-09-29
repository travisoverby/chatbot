'use strict';

const HipChatSlashCommand = require('../models/hipchatslashcommand.js');

function returnMessage(req, res, next) {
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

  const slashCommand = new HipChatSlashCommand(params);
  return slashCommand;
};


module.exports = {
  returnMessage: returnMessage
};
