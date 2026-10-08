import express from "express";
import path from "path";
import { fileURLToPath } from "node:url";

const app = express();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.use(express.static(path.join(dirname, "pages")));

app.use((req, res) => {
  res.status(404).sendFile(path.join(dirname, "pages", "404.html"));
});


app.listen(4444, () => console.log("prg3 is running at 4444"));