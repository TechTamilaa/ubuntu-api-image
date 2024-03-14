import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  database: 'ami',
  username: 'root',
  password: '12345678',
  host: 'localhost',
  dialect: 'mysql',
});

export async function connectDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync(); 
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
