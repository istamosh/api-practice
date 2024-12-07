import express from "express";

const app = express();
const PORT = 8080;

// using middleware for destructuring JSON
app.use(express.json());

// basic port listener
app.listen(PORT, () => {
  console.log(`It's alive on http://localhost:${PORT}`);
});

// create a simple GET request handler for http://localhost:${PORT}/tshirt
// handling incoming data (req), and outgoing data (res)
app.get("/shoes", (req, res) => {
  // this will give 200 response (OK) when user fires GET /shoes
  // send a payload as a JSON file
  res.status(200).send({
    brand: "Abibas",
    size: "42",
    form: "👟👟",
  });
});

// simple POST
app.post("/shoes/:id", (req, res) => {
  const { id } = req.params;

  // Express doesn't destructure JSON by default
  const { color } = req.body;

  if (!color) {
    res.status(418).send({ message: "you forgot the color payload!" });
  }

  res.send({
    shoes: `here is your pair of ${color} shoes 👟👟, with ID: ${id}`,
  });
});
