'use strict';

const { Theme } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Theme.bulkCreate([
      {
        title: 'Каля маля',
      },
      {
        title: 'О высоком', 
      },
      {
        title: 'From Elbrus',
      },
    ]);
  },

  async down() {
    await Theme.destroy({ truncate: { cascade: true } });
  },
};
