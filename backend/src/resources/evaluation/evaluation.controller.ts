import { Request, Response, NextFunction } from "express";
import { Evaluation } from "./evaluation.model";
import mongoose from "mongoose";


export async function getAllEvaluation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const evaluation = await Evaluation.find();
    res.locals.json = {
      statusCode: 200,
      data: evaluation,
    };
    return next();
  } catch (err) {
    res.locals.json = {
      statusCode: 404,
      data: "Error",
    };
    return next(err);
  }
}

export async function getEvaluationById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const evaluation = await Evaluation.findById(req.params.id);
    res.locals.json = {
      statusCode: 200,
      data: evaluation,
    };
    return next();
  } catch (err) {
    console.log(err);
    res.locals.json = {
      statusCode: 404,
      data: "Error",
    };
    return next(err);
  }
}

export async function addEvaluation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    let tag = req.body.id;
     tag = new mongoose.Types.ObjectId(tag);
    console.log(tag);
   
      const evaluation = new Evaluation({
        title: req.body.title,
        question: req.body.question,
        tag: tag,
      });
      console.log(evaluation)
      const savedEvaluation = await evaluation.save();
      (res.locals.json = {
        statusCode: 200,
        data: savedEvaluation,
      });
    return next();
  } catch (err) {
    console.log(err)
    res.locals.json = {
      statusCode: 404,
      data: "Error",
    };
    return next(err);
  }
}

export async function updateById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = req.body;
    const done = await Evaluation.updateOne(
      { _id: req.params.id },
      { $set: data }
    );
    res.locals.json = {
      statusCode: 200,
      data: done,
    };
    return next();
  } catch (err) {
    res.locals.json = {
      statusCode: 404,
      data: "Error",
    };
    return next(err);
  }
}

export async function deleteById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const evaluation = await Evaluation.deleteOne({
      _id: req.params.id,
    });
    res.locals.json = {
      statusCode: 200,
      data: evaluation,
    };
    return next();
  } catch (err) {
    res.locals.json = {
      statusCode: 404,
      data: "Error",
    };
    return next(err);
  }
}
