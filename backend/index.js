const { setupDatabase } = require("./src/database/db"); // Import the setupDatabase function
const express = require("express");
const router = require("./routes");
const cors = require("cors");
const app = express();

const port = 3000;

//Middleware
app.use(express.json());
app.use(cors);
app.use(router);

app.listen(port, () => {
  console.log(`Server is now listening at port ${port}`);
});
// Call the setup function
setupDatabase();
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments(id);
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("email").notNullable().unique();
    table.string("phone").notNullable().unique();
    table.string("role").notNullable().unique();
    table.string("password").notNullable;
    table.timestamp(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
