const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (res, res) => {
  res.send("Root");
});

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
