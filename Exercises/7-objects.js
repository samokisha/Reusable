'use strict';

const fn = () => {
  const obj1 = { name: 'Some name' };
  let obj2 = { name: 'Some name' };

  obj1.name = 'New name';
  obj2.name = 'New name';

  // obj1 = { name: 'New object' };
  obj2 = { name: 'New object' };
};

module.exports = { fn };
