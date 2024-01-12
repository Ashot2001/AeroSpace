// NPM Modules
import express from "express";

// Local Modules
import { AeroSpaceController } from "../controller";
import { ImageUploadMiddleware } from "../middlewares/image-upload.middleware";
import { VideoUploadMiddleware } from "../middlewares/video-upload.middleware";
import { GifUploadMiddleware } from "../middlewares/gif-upload.middleware";
import AuthMiddleware from "../auth/auth.middlware";

import {
  MailValidationMiddleware,
  HeaderValidationMiddleware,
  FooterValidationMiddleware,
  BlokValidationMiddleware,
  AboutValidationMiddleware,
  QuizValidationMiddleware,
  LessonValidationMiddleware,
  TopicValidationMiddleware,
  OurTeamValidationMiddleware,
  PartnersValidationMiddleware,
  SatelliteValidationMiddleware,
  SatelliteQuizValidationMiddleware,
} from "../middlewares/validation/index";

const router = express.Router();

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  USER interfase >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

router.post(
  "/sendMail",
  MailValidationMiddleware.validateMailArgs,
  AeroSpaceController.sendMail
); // completed

router.get(
  "/topics/:lesson/:lang",
  TopicValidationMiddleware.validateGetArgs,
  AeroSpaceController.topics
); // completed

router.get(
  "/lessons/:lang",
  LessonValidationMiddleware.validateGetArgs,
  AeroSpaceController.lessons
); // completed

router.get(
  "/getLectures/:lesson/:lang",
  LessonValidationMiddleware.validateGetArgs,
  AeroSpaceController.getLectures
); // completed

router.get(
  "/slides/:lectures/:lang",
  LessonValidationMiddleware.validateGetArgs,
  AeroSpaceController.getSlides
); // completed

router.get(
  "/getQuiz/:lesson/:lang",
  QuizValidationMiddleware.validateGetArgs,
  AeroSpaceController.getQuiz
); // completed

router.get(
  "/getOurTeam/:lang",
  OurTeamValidationMiddleware.validateGetArgs,
  AeroSpaceController.getOurTeam
); // completed

router.get(
  "/getPartners/:lang",
  PartnersValidationMiddleware.validateGetArgs,
  AeroSpaceController.getPartners
); // completed

router.get(
  "/homeIcons/:different/:lang",
  BlokValidationMiddleware.validateGetArgs,
  AeroSpaceController.getHomeIcons
); // completed

router.get(
  "/header/:lang",
  HeaderValidationMiddleware.validateGetArgs,
  AeroSpaceController.getHeader
); // completed

router.get(
  "/footer/:lang",
  FooterValidationMiddleware.validateGetArgs,
  AeroSpaceController.getFooter
); // completed

router.get(
  "/about/:lang",
  AboutValidationMiddleware.validateGetArgs,
  AeroSpaceController.getAbout
); // completed

router.get(
  "/satellite/:lang",
  AboutValidationMiddleware.validateGetArgs,
  AeroSpaceController.satellite
); // completed

router.get(
  "/satelliteQuestions/:lang",
  AeroSpaceController.getSatelliteQuestions
); // completed

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<  ADMIN interfase >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// header
// router.post('/addHeader/:lang', /*HeaderValidationMiddleware.validateAddArgs,*/
//   AeroSpaceController.addHeader);
router.put(
  "/editHeader/:lang/:id",
  // AuthMiddleware.authenticateFor(["admin"]),
  HeaderValidationMiddleware.validateEditArgs,
  AeroSpaceController.editHeader
);
// router.delete('/deleteHeader/:lang/:id', /*HeaderValidationMiddleware.validateDelByIdArgs,*/
//   AeroSpaceController.deleteHeader);

//---------------------------------------------------------------------------------------------------------------------------
// upload image,video,gif
router.post(
  "/addPicture",
  // AuthMiddleware.authenticateFor(['admin']),
  ImageUploadMiddleware.upload(),
  AeroSpaceController.addPicture
);

router.post(
  "/addVideo",
  // AuthMiddleware.authenticateFor(['admin']),
  VideoUploadMiddleware.upload(),
  AeroSpaceController.addVideo
);

router.post(
  "/addGif",
  // AuthMiddleware.authenticateFor(['admin']),ji
  GifUploadMiddleware.upload(),
  AeroSpaceController.addGif
);

// completed
//---------------------------------------------------------------------------------------------------------------------------

router.put(
  "/editAbout/:lang/:id",
  // AuthMiddleware.authenticateFor(["admin"]),
  AboutValidationMiddleware.validateEditArgs,
  AeroSpaceController.editAbout
);

// bloks
router.put(
  "/editBlok/:lang/:different/:index/:id",
  // AuthMiddleware.authenticateFor(["admin"]),
  BlokValidationMiddleware.validateEditArgs,
  AeroSpaceController.editBlok
);

router.post(
  "/addNewBlok/:lang/:different",
  // AuthMiddleware.authenticateFor(["admin"]),
  BlokValidationMiddleware.validateAddArgs,
  AeroSpaceController.addNewBlok
);

router.delete(
  "/blok/:lang/:different/:index",
  // AuthMiddleware.authenticateFor(["admin"]),
  BlokValidationMiddleware.validateDelByIdArgs,
  AeroSpaceController.deleteExistBlok
);

// about page
router.put(
  "/editAboutPage/:lang/:id",
  // AuthMiddleware.authenticateFor(["admin"]),
  AboutValidationMiddleware.validateEditArgs,
  AeroSpaceController.editAboutPage
);

router.post(
  "/addNewAboutBox/:lang",
  // AuthMiddleware.authenticateFor(["admin"]),
  AboutValidationMiddleware.validateAddArgs,
  AeroSpaceController.addNewAboutBox
);

router.delete(
  "/deleteExistAboutBox/:lang/:id",
  // AuthMiddleware.authenticateFor(["admin"]),
  AboutValidationMiddleware.validateDelByIdArgs,
  AeroSpaceController.deleteExistAboutBox
);

// quiz page
router.post(
  "/addNewQuestion/:lang",
  // AuthMiddleware.authenticateFor(["admin"]),
  QuizValidationMiddleware.validateAddArgs,
  AeroSpaceController.addNewQuestion
);

router.put(
  "/editExistQuestion/:lang/:id",
  // AuthMiddleware.authenticateFor(["admin"]),
  QuizValidationMiddleware.validateEditArgs,
  AeroSpaceController.editExistQuestion
);

router.delete(
  "/deleteExistQuestion/:lang/:id",
  // AuthMiddleware.authenticateFor(["admin"]),
  QuizValidationMiddleware.validateDelByIdArgs,
  AeroSpaceController.deleteExistQuestion
);

// lesson page
router.post(
  "/addNewLesson/:lang",
  // AuthMiddleware.authenticateFor(["admin"]),
  LessonValidationMiddleware.validateAddArgs,
  AeroSpaceController.addNewLesson
);

router.put(
  "/editExistLesson/:lang/:id",
  // AuthMiddleware.authenticateFor(["admin"]),
  // LessonValidationMiddleware.validateEditArgs,
  AeroSpaceController.editExistLesson
);

router.delete(
  "/deleteExistLesson/:lang/:id/:lesson",
  // AuthMiddleware.authenticateFor(["admin"]),
  LessonValidationMiddleware.validateDelByIdArgs,
  AeroSpaceController.deleteExistLesson
);

// topics page
router.post(
  "/addNewTopics/:lang",
  // AuthMiddleware.authenticateFor(["admin"]),
  TopicValidationMiddleware.validateAddArgs,
  AeroSpaceController.addNewTopics
);

router.put(
  "/editExistTopics/:lang/:id",
  // AuthMiddleware.authenticateFor(["admin"]),
  TopicValidationMiddleware.validateEditArgs,
  AeroSpaceController.editExistTopics
);

router.delete(
  "/deleteExistTopics/:lang/:id",
  // AuthMiddleware.authenticateFor(["admin"]),
  TopicValidationMiddleware.validateDelByIdArgs,
  AeroSpaceController.deleteExistTopics
);

// footer
router.post(
  "/addFooter/:lang",
  FooterValidationMiddleware.validateAddArgs,
  AeroSpaceController.addFooter
);

router.put(
  "/editFooter/:lang/:id",
  // AuthMiddleware.authenticateFor(["admin"]),
  FooterValidationMiddleware.validateEditArgs,
  AeroSpaceController.editFooter
);

router.delete(
  "/deleteFooter/:id/:lang",
  FooterValidationMiddleware.validateDelByIdArgs,
  AeroSpaceController.deleteFooter
);

// satellite
router.post(
  "/addSatellite/:lang",
  // AuthMiddleware.authenticateFor(["admin"]),
  SatelliteValidationMiddleware.validateAddArgs,
  AeroSpaceController.addSatellite
);

router.put(
  "/editSatellite/:lang/:id",
  // AuthMiddleware.authenticateFor(["admin"]),
  // SatelliteValidationMiddleware.validateEditArgs,
  AeroSpaceController.editSatellite
);

router.delete(
  "/deleteSatellite/:lang/:id/:key/:index",
  // AuthMiddleware.authenticateFor(["admin"]),
  SatelliteValidationMiddleware.validateDelByIdArgs,
  AeroSpaceController.deleteSatellite
);

//satellite questions
router.post(
  "/addSatelliteQuestion/:lang",
  // AuthMiddleware.authenticateFor(["admin"]),
  SatelliteQuizValidationMiddleware.validateAddArgs,
  AeroSpaceController.addSatelliteQuestion
);

router.put(
  "/editSatelliteQuestion/:lang/:id",
  // AuthMiddleware.authenticateFor(["admin"]),
  SatelliteQuizValidationMiddleware.validateEditArgs,
  AeroSpaceController.editSatelliteQuestion
);

router.delete(
  "/deleteSatelliteQuestion/:lang/:id",
  // AuthMiddleware.authenticateFor(["admin"]),
  SatelliteQuizValidationMiddleware.validateDelByIdArgs,
  AeroSpaceController.deleteSatelliteQuestion
);

export default router;
