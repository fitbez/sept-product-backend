const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/product/productRoutes.js");
const authRoutes = require("./routes/user/authRoutes.js");
const cors = require("cors");

// creating an express instance
const app = express();
app.use(cors());
app.use(bodyParser.json());

//define routes
app.use("/api/product", productRoutes);
app.use("/api/auth", authRoutes);
// Set up our express server
const PORT = process.env.PORT || "5000";
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
