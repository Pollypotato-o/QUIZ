'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Theme}) {
      this.belongsTo(Theme, {foreignKey: 'theme_id'})
    }
  }
  Question.init({
    theme_id: {
      type: DataTypes.BIGINT,
      references: {
        model: 'Themes',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    question: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    question_pic: {
      type: DataTypes.TEXT
    },
    answer: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    points: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    picForAnswer: {
      type: DataTypes.TEXT
    },
    infoForAnswer: {
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};