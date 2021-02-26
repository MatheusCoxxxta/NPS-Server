import "reflect-metadata";
import express from "express";
import createConnection from "./database";
import { route } from "./routes";

createConnection();
const app = express();
app.use(express.json());
app.use(route);

export { app };
