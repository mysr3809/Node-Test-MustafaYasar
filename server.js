import express from "express";
import router from "./routes/routesMovie.js";
const app = express();
const port = 3000;
app.use(express.json());
app.use("/", router);

app.listen(port, () => console.log(`server started at port ${port}`))

export default app;