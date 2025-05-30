import { Sequelize } from "sequelize";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "data", "FUTBOL.sqlite"),
  logging: false,
});

export default sequelize;
// This code sets up a SQLite database connection using Sequelize.
