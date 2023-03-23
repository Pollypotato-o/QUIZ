const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Point extends Model {
    static associate({User}) {
      this.belongsTo(User, {foreignKey: 'user_id'})
    }
  }
  Point.init({
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    score: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Point',
  });
  return Point;
};