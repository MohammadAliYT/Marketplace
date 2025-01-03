const knex = require("knex");
const knexfile = require("./knexfile");
const db = knex(knexfile.development);

const { Pool } = require("pg");
require("dotenv").config({ path: "./src/config/.env" });

const adminPool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: "postgres", // Connect to the default "postgres" database
});

const appPool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Function to create the database if it doesn't exist
const createDatabase = async () => {
  try {
    const dbName = process.env.DB_NAME;
    const checkDbQuery = `SELECT 1 FROM pg_database WHERE datname = $1;`;
    const result = await adminPool.query(checkDbQuery, [dbName]);

    if (result.rowCount === 0) {
      const createDbQuery = `CREATE DATABASE ${dbName};`;
      await adminPool.query(createDbQuery);
      console.log(`Database "${dbName}" created successfully.`);
    } else {
      console.log(`Database "${dbName}" already exists.`);
    }
  } catch (error) {
    console.error("Error creating database:", error.message);
  }
};

// Function to initialize the database (migrate or seed)
const initializeDatabase = async () => {
  try {
    console.log("Database initialization.");
  } catch (error) {
    console.error("Error initializing database:", error.message);
  }
};

// Main setup function
const setupDatabase = async () => {
  await createDatabase();
  await initializeDatabase();
  console.log("Database setup completed.");
};

// Export the appPool for application use
module.exports = {
  setupDatabase,
  pool: appPool,
  db,
};
