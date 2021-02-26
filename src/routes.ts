import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { SurveysController } from "./controllers/SurveysController";
import { SendMailController } from "./controllers/SendMailController";
import { AnswerController } from "./controllers/AnswerController";

const route = Router();

const userController = new UserController();
const surveyController = new SurveysController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();

route.post("/users", userController.create);

route.post("/surveys", surveyController.create);
route.get("/surveys", surveyController.index);

route.post("/sendMail", sendMailController.execute);

route.get("/answers/:value", answerController.execute);

export { route };
