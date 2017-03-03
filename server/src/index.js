import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = process.env.PORT || 9000;

const stack = [
  { id: 67544, text: "first item" },
  { id: 79796, text: "second item" }
];

app.use(bodyParser.json());
app.use(cors());

app.get("/stack/items/", (req, res) => {
  res.json(stack);
});

app.post("/stack/item/", (req, res) => {
  let item = req.body;
  console.log("Storing an item", item);
  stack.push(item);
  res.status(200).send(`[OK] Item ${item.id} saved.`);
});

// Starting app
app.listen(port, err => {
  if (err) {
    console.error(err);
  }

  if (__DEV__) {
    // webpack flags!
    console.log("> in development");
  }

  console.log(`> listening on port ${port}`);
});
