import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

class Image extends Model {
  public id!: number;
  public url!: string;
}

Image.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'images',
    sequelize,
  }
);

export default Image;
