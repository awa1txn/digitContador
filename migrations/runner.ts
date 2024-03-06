// THIS IS TS-NODE RUNNER DATABASE MIGRATION FOR POSTGRES V.16
// POSTGRES BASED ON DOCKER IMAGE
// https://hub.docker.com/_/postgres

import { createConnection } from 'typeorm';

async function createDatabase() {
    try {
    const connection = await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'root',
        database: 'postgres',
      synchronize: true, // Automatically creates database schema based on entities
      logging: true, // Enable logging to see what happens under the hood
    });

    console.log('Connected to the database');

    // Define your entity (table) with the required columns
    await connection.query(`
      CREATE TABLE IF NOT EXISTS networth (
        id serial PRIMARY KEY,
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        cash FLOAT,
        card FLOAT,
        crypto FLOAT
      );
    `);

    console.log('Table created successfully');

    await connection.destroy();
    console.log('Connection closed');
    } catch (error) {
    console.error('Error creating database:', error);
    }
}

createDatabase();
