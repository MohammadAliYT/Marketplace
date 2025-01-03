// src/database/setupDatabase.js
const { setupDatabase } = require("./db");

setupDatabase()
  .then(() => {
    console.log("Database setup completed.");
    process.exit(0); // Exit the process after setup
  })
  .catch((error) => {
    console.error("Failed to set up the database:", error.message);
    process.exit(1); // Exit with error code
  });
