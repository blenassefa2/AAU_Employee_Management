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
export const getUserDetails = (req: Request, res: Response, next: NextFunction) => {
  const email = req.query.email as string;
  const password = req.query.password as string;

  Account.findOne({ email })
    .then((user) => {
      if (!user) {
        res.status(404).json({
          message: "User not found",
        });
      } else {
        bcrypt.compare(password, user.password, function (err, result) {
          if (err || !result) {
            res.status(401).json({
              message: "Invalid credentials",
            });
          } else {
            const userData = {
              name: `${user.firstName} ${user.lastName}`,
              phone: user.phone,
              email: user.email,
            };

            res.status(200).json(userData);
          }
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Internal server error",
      });
    });
};
export const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.id;

  Account.deleteOne({ _id: userId })
    .then((result) => {
      if (result.deletedCount && result.deletedCount === 1) {
        res.status(200).json({
          message: "User deleted successfully",
        });
      } else {
        res.status(404).json({
          message: "User not found",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Error occurred while deleting user",
      });
    });
};