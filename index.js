import express from "express";
import cors from "cors";
import router from "./routes/route.js";
import DBConnection from "./database/db.js";
const app = express();

app.use(cors());
app.use("/", router);

const PORT = 8000;

DBConnection();

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
