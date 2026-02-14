import { app } from "./app.js";
import connectDB from "./db/config.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env"
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running at ${process.env.BASE_URL}`);
    });
  })
  .catch((err) => console.log(err, "error in running our app"));
