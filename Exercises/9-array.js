'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Marco Aurel', phone: '+380445554422' }
];

const findPhoneByName = n => {
  for (const u of phonebook) {
    if (u.name === n) {
      return u.phone;
    }
  }
};

module.exports = { phonebook, findPhoneByName };
