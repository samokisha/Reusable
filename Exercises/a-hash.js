'use strict';

const phonebook = {
  marco: {
    phone: '+380445554422'
  },
  marcus: {
    phone: '+380445554433'
  }
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
