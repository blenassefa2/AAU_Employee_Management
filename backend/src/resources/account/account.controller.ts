import { Account } from "./account.model";
import bcrypt from "bcryptjs";
import { NextFunction, Request, Response } from "express";

export const register = (req: Request, res: Response, next: NextFunction) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedpass) {
    if (err) {
      res.json({
        error: err,
      });
    }
    let user = new Account({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.hashedpass,
    });
    user
      .save()
      .then((user) => {
        res.json({
          message: "user Added successfully",
        });
      })
      .catch((error) => {
        res.json({
          message: "error occured",
        });
      });
  });
};
