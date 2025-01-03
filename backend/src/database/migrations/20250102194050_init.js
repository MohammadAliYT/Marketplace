/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  // Check if the "users" table exists before creating it
  const usersTableExists = await knex.schema.hasTable("users");
  if (!usersTableExists) {
    await knex.schema.createTable("users", function (table) {
      table.increments("id");
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.string("email").notNullable().unique();
      table.string("phone").notNullable().unique();
      table.string("role").notNullable().unique();
      table.string("password").notNullable();
      table.timestamps(true, true);
    });
  }

  // Check if the "roles" table exists before creating it
  const rolesTableExists = await knex.schema.hasTable("roles");
  if (!rolesTableExists) {
    await knex.schema.createTable("roles", function (table) {
      table.increments("id");
      table.string("role_name").notNullable().unique();
      table.string("description");
      table.timestamps(true, true);
    });
  }

  const productsTableExists = await knex.schema.hasTable("products");
  if (!productsTableExists) {
    await knex.schema.createTable("products", function (table) {
      table.increments("product_id"); // Primary key
      table
        .integer("vendor_id") // Foreign key linking to the "users" table
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE"); // Cascade delete when the user is deleted
      table.string("name").notNullable();
      table.string("description");
      table.float("price").notNullable();
      table.integer("stock").notNullable();
      table.timestamps(true, true);
    });
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable("users")
    .dropTable("roles")
    .dropTable("products");
};
