import app from "./app";
import mongoose from "mongoose";

async function main() {
  const port = process.env.PORT || 3000;

  await mongoose.connect('mongodb://localhost:27017', {
    dbName: process.env.DB_NAME || 'incode_tiny_app',
    user: process.env.DB_USER || 'root',
    pass: process.env.DB_PASS || 'root',
  });

  app.listen(port, () => {
    console.log(`server is listened on http://localhost:${port}`);
  });
};

main();
