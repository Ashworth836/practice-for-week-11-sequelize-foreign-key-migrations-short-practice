'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Your code here
      Musician.belongsTo(models.Band, {foreignKey: 'bandId'});
      Band.hasMany(models.Musician, {onDelete: 'cascade'});
    }
  };
  Band.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Band',
  });
  return Band;
};