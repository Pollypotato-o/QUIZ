'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      theme_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'Themes',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      question: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      question_pic: {
        type: Sequelize.TEXT
      },
      answer: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      points: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      picForAnswer: {
        type: Sequelize.TEXT
      },
      infoForAnswer: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Questions');
  }
};