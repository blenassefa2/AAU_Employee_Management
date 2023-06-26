
import { Request, Response, NextFunction } from "express";
import { tag } from "./tag.model";
import { Evaluation } from "../evaluation/evaluation.model";

export async function getAllTag(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const alltags = await tag.find();
    res.locals.json = {
      statusCode: 200,
      data: alltags,
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
export async function getQuestionsTag(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const array = [];
    const alltags = await tag.find();
    //console.log(alltags)
    await Promise.all(
      alltags.map(async (tag) => {
        const id = tag._id;
        const name = tag.name;
        const questions = await Evaluation.find({ tag: id });
        array.push([name, questions]);
      })
    );
    console.log(array)
     res.locals.json = {
       statusCode: 200,
       data: array,
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
export async function addTag(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const name = req.body.name;
  const newtag = new tag({
   name:name
  });
  try {
    const savedTag = await newtag.save();
    res.locals.json = {
      statusCode: 200,
      data: savedTag,
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
