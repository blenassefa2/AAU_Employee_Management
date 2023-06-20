import { Account } from "../../resources/account/account.model";
import bcrypt from "bcryptjs";
import { NextFunction, Request, Response } from "express";
import JWT from "jsonwebtoken";

export const login = (req: Request, res: Response, next: NextFunction) => {
  const email = req.body.email;
  const password = req.body.password;

  Account.findOne({ email })
    .then((user) => {
      if (!user) {
        res.locals.json = {
          statusCode: 404,
          message: "blah blah",
        };
        return next();
      } else {
        bcrypt.compare(password, <string>user.password, function (err, result) {
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

            const token = JWT.sign(
              { _id: user._id, role: user.role },
              process.env.JWT_SECRET
            );
            console.log(token);
            res.locals.json = {
              statusCode: 200,
              data: {
                token: token,
                role: user.role,
              },
            };
            return next();
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
