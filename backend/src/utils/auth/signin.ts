import { Account } from "../../resources/account/account.model";
import bcrypt from "bcryptjs";
import { NextFunction, Request, Response } from "express";

export const login = (req: Request, res: Response, next: NextFunction) => {
  const email = req.query.email as string;
  const password = req.query.password as string;

  Account.findOne({ email })
    .then((user) => {
      if (!user) {
        res.locals.json = {
          statusCode: 404,
          message: "user not found",
        };
        return next();
      } else {
        bcrypt.compare(password, user.password, function (err, result) {
          if (err || !result) {
            res.locals.json = {
              statusCode: 401,
              message: "Invalid Cridentials",
            };
            return next();
          } else {
            const userData = {
              name: `${user.firstName} ${user.lastName}`,
              phone: user.phone,
              email: user.email,
            };

            res.locals.json = {
              statusCode: 200,
              data: userData,
            };
          }
        });
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
