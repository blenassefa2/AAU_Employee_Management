import { Account } from "./account.model";
import bcrypt from "bcryptjs";
import { NextFunction, Request, Response } from "express";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await bcrypt.hash(req.body.password, 10, async function (err, hashedpass) {
    if (err) {
      res.locals.json = {
        statusCode: 500,
        message: "couldn't hash password",
      };
      return next();
    }
    let user = await new Account({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedpass,
    });
    await user
      .save()
      .then((user) => {
        res.locals.json = {
          statusCode: 200,
          data: user,
        };
        return next();
      })
      .catch((error) => {
        console.log(error);
        res.locals.json = {
          statusCode: 500,
          message: "error occured",
        };
        return next();
      });
  });
};

export const getUserById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.id;

  Account.findById({ _id: userId })
    .then((user) => {
      if (user) {
        res.locals.json = {
          statusCode: 200,
          data: user,
        };
        return next();
      } else {
        res.locals.json = {
          statusCode: 404,
          message: "user not found",
        };
        return next();
      }
    })
    .catch((error) => {
      res.locals.json = {
        statusCode: 500,
        message: "error occured",
      };
      return next();
    });
};
