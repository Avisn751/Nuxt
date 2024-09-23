const { Sequelize } = require('sequelize');

// Create a new instance of Sequelize
const sequelize = new Sequelize('node', 'sa', 'everywhere@1', {
  host: 'localhost',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true, // Use encryption for security
      trustServerCertificate: true // Trust the server certificate
    }
  },
  logging: false
});

// Test the connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

testConnection();

module.exports = sequelize;
