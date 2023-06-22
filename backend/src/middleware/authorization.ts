import { Request, Response, NextFunction } from "express-serve-static-core";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { Account } from "../resources/account/account.model";
import { Token } from "../resources/token/token.model";
dotenv.config();

export const authorize = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.headers);
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(401).json({
      statusCode: 401,
      message: "Access Denied",
    });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || "");
    const { _id, role } = JSON.parse(JSON.stringify(payload));
    const user = await Account.findById(_id);
    if (!user) {
      res.locals.json = {
        data: "User is not registered",
        statusCode: 400,
      };
      return next();
    }

    res.locals = {
      _id: _id,
      role: role,
    };

    return next();
  } catch (error) {
    res.status(401).json({
      statusCode: 401,
      message: "Invalid Token!",
    });
  }
};
