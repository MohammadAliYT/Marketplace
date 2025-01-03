const knex = require("knex");
const knexfile = require("./knexfile");

const db = knex(knexfile.development);

module.exports = db;
// const { Pool } = require("pg");

// require("dotenv").config({ path: "./src/config/.env" });

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

// pool.on("connect", () => {
//   console.log("Connection pool established with database");
// });

// const createDatabaseQuery = `CREATE DATABASE IF NOT EXISTS ecommerce;`;

// const createUsersTableQuery = `
//   CREATE TABLE IF NOT EXISTS users (
//     user_id SERIAL PRIMARY KEY,
//     name VARCHAR(100) NOT NULL,
//     email VARCHAR(255) UNIQUE NOT NULL,
//     password_hash VARCHAR(255) NOT NULL,
//     phone VARCHAR(20),
//     role VARCHAR(50) NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//   );
// `;

// const createRolesTableQuery = `
//   CREATE TABLE IF NOT EXISTS roles (
//     role_id SERIAL PRIMARY KEY,
//     role_name VARCHAR(100) UNIQUE NOT NULL,
//     description VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//   );
// `;

// const createDatabase = async () => {
//   try {
//     await pool.query(createDatabaseQuery);
//     console.log('Database "ecommerce" created successfully');
//   } catch (error) {
//     console.error("Error creating database:", error.message);
//   }
// };

// const createUsersTable = async () => {
//   try {
//     await pool.query(createUsersTableQuery);
//     console.log('Table "users" created successfully');
//   } catch (error) {
//     console.error("Error creating table:", error.message);
//   }
// };

// const createRolesTable = async () => {
//   try {
//     await pool.query(createRolesTableQuery);
//     console.log('Table "roles" created successfully');
//   } catch (error) {
//     console.error("Error creating table:", error.message);
//   } finally {
//     pool.end();
//   }
// };

// const setupDatabase = async () => {
//   await createDatabase();
//   await createUsersTable();
//   await createRolesTable();
// };

// // Export the functions so they can be used in other files
// module.exports = {
//   setupDatabase,
//   createDatabase,
//   createUsersTable,
//   createRolesTable,
// };
