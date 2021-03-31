require('dotenv').config();

module.exports = {
    client: 'postgresql',
    connection: process.env.POSTGRES_URL,
    migrations: {
        tableName: 'knexMigrations',
        directory: 'dist/database/migrations'
    }
};
