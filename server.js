const express = require("express");
const userRouter = require("./routes/auth/user");
const standingRouter = require("./routes/api/standing");
const teamsRouter = require("./routes/api/teams");
const topscoreRouter = require("./routes/api/topscore");
const connectDB = require("./config/db");

const app = express();
const port = process.env.PORT || 5000;

// Connect Database
connectDB();

app.use(express.json({ extended: false }));

app.use("/auth", userRouter);
app.use("/api/standing", standingRouter);
app.use("/api/teams", teamsRouter);
app.use("/api/topscore", topscoreRouter);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, (req, res) => {
  console.log(`Server is ON ${port}`);
});
