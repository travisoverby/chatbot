'use strict';

const HipChatSlashCommand = function(params) {
  this.mentionName = params.mentionName;
  this.name = params.name;
  this.mentions = params.mentions;
  this.rawMessage = params.rawMessage;
  this.func = params.rawMessage[0];
  this.funcParams = params.rawMessage  
};

HipChatSlashCommand.prototype.getRawMessage = function() {
   return this.rawMessage.join(' ');
};

HipChatSlashCommand.prototype.weather = function(zip) {
  
}

module.exports = HipChatSlashCommand;
