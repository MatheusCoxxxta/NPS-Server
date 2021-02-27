import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { SurveysController } from "./controllers/SurveysController";
import { SendMailController } from "./controllers/SendMailController";
import { AnswerController } from "./controllers/AnswerController";
import { NpsController } from "./controllers/NpsController";

const route = Router();

const userController = new UserController();
const surveyController = new SurveysController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();

route.post("/users", userController.create);

route.post("/surveys", surveyController.create);
route.get("/surveys", surveyController.index);

route.post("/sendMail", sendMailController.execute);

route.get("/answers/:value", answerController.execute);

route.get("/nps/:survey_id", npsController.execute);

export { route };
