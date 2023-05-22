import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

// import routes
import bookRoutes from "./app/modules/book/book.route";

// using cors middleware to allow cross-origin requests from anywhere
app.use(cors());

// parse data in json format
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/v1/book", bookRoutes);

export default app