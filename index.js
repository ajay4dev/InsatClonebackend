const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDB = require("./utils/db");
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");
const messageRoutes = require("./routes/message.routes");
const { app, server } = require("./socket/socket");

// Use cookie-parser middleware
app.use(cookieParser());

app.use(express.json());
dotenv.config();
connectDB();

const PORT = 4000;

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/message", messageRoutes);

server.listen(PORT, () => {
  console.log(`Server listen at port ${PORT}`);
});
