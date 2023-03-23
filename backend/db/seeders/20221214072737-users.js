const bcrypt = require('bcrypt');
const { User } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await User.bulkCreate([
      {
        name: 'XXX',
        email: 'vindiesel@gmail.com',
        password: await bcrypt.hash('123', 10)
      },
      {
        name: 'Me',
        email: 'imnotyou@gmail.com',
        password: await bcrypt.hash('123', 10),
      },
      {
        name: 'John Snow',
        email: 'johnsnow@gmail.com',
        password: await bcrypt.hash('123', 10),
      },
    ]);
  },

  async down() {
    await User.destroy({ truncate: { cascade: true } });
  },
};
