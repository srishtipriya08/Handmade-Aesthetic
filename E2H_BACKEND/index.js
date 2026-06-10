const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const { sequelize } = require("./models");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Serve static images from 'uploads' folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/categoryy", require("./routes/categoryRoutes"));

app.use(require("./middlewares/errorHandler"));

app.get("/", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});



const PORT = process.env.PORT || 5000;

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
