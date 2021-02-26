import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysUsersRepository } from "../repositories/SurveysUsersReporistory";

class NpsController {
  async execute(request: Request, response: Response) {
    const { survey_id } = request.params;
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const surveysUsers = await surveysUsersRepository.find({
      survey_id,
    });

    const promoters = surveysUsers.filter(
      (survey) => survey.value >= 9 && survey.value <= 10
    ).length;

    const detractors = surveysUsers.filter(
      (survey) => survey.value >= 0 && survey.value <= 6
    ).length;

    const passive = surveysUsers.filter(
      (survey) => survey.value >= 6 && survey.value <= 8
    ).length;

    const totalAnswers = surveysUsers.length;

    const calculate = (promoters - detractors) / totalAnswers;

    return response.status(200).json({
      promoters,
      detractors,
      passive,
      totalAnswers,
      NPS: calculate,
    });
  }
}

export { NpsController };
