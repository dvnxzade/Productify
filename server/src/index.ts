import express from "express";
import cors from "cors";
import "dotenv/config";
import { HttpType } from "./@types/http.type";
import { clerkMiddleware } from "@clerk/express";

const app = express();

app.use(clerkMiddleware())
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cors({ origin : process.env.ORIGIN }));

const homeController: HttpType = (_, res) => {
  return res.status(200).json({
    message: "Hello World",
    endpoints : {
        users : "/api/users",
        products : "/api/products",
        comments : "/api/comments"
    }
  });
};


app.get("/", homeController);

app.listen(process.env.PORT , () => console.log("Server running at port :" , process.env.PORT))
