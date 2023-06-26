import { Account, IAccountInterface } from "./account.model";
import { Notification } from "../notification/notification.model";
import bcrypt from "bcryptjs";
import e, { NextFunction, Request, Response } from "express";
import { transporter } from "../../middleware/sendEmail";
import XLSX from "xlsx";
import fs from "fs";
import * as randomstring from "randomstring";
import cloudinary from "../../config/cloudinary";
import { ObjectId } from "mongodb";
import { reject } from "lodash";
import { setDefaultResultOrder } from "dns";

// Usage

export const registerMany = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const filePath = req.file.path;

    // Read the uploaded file
    const workbook = XLSX.readFile(filePath);

    // Get the sheet you want to extract the employee data from (assuming it's the first sheet in this example)
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    // Convert the sheet data to a JSON object
    const employees = XLSX.utils.sheet_to_json(worksheet);

    // Process the employee data and save to the database
    for (const employeeData of employees) {
      const randomPassword: string = randomstring.generate(10); // Generate a 10-character random password
      // Generate a hash of the password

      // Generate a hash of the password
      const hashedPassword = await bcrypt.hash(randomPassword, 10);

      const employee = employeeData as IAccountInterface;
      const newEmployee = new Account({
        firstName: employee.firstName,
        lastName: employee.lastName,
        userName: employee.firstName + employee.lastName,
        email: employee.email,
        phone: employee.phone,
        password: hashedPassword,
        role: employee.role,
        woreda: employee.woreda,
        maritaStatus: employee.maritaStatus,
        town: employee.town,
        houeseNo: employee.houeseNo,
        kebele: employee.kebele,
      });

      await newEmployee.save();
      // console.log("Created employee:", newEmployee);
      const mailOptions = {
        from: "aauhumanresource@gmail.com",
        to: employee.email as string,
        subject: "New account",
        text: "password: " + randomPassword,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully!", info.response);
    }

    res.locals.json = {
      statusCode: 200,
      message: "File uploaded and employees created successfully.",
    };
    return next();
  } catch (err) {
    console.log(err);
    res.locals.json = {
      statusCode: 500,
      error: "An error occurred while processing the file.",
    };
    return next();
  }
};
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cloudinaryImage = await cloudinary.uploader.upload(req.file.path, {
      folder: "photo",
      use_filename: true,
    });
    const hashedpass = await bcrypt.hash("req.body.password", 10);

    let user = await new Account({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.firstName + req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      role: req.body.role,
      photoUrl: req.body.photoUrl,
      password: hashedpass,
      photo: cloudinaryImage.secure_url,
      woreda: req.body.woreda,
      maritaStatus: req.body.maritaStatus,
      town: req.body.town,
      houeseNo: req.body.houeseNo,
      kebele: req.body.kebele,
    });
    await user.save();

    res.locals.json = {
      statusCode: 200,
      data: user,
    };
    return next();
  } catch (error) {
    console.log(error);
    res.locals.json = {
      statusCode: 500,
      message: "error occured",
    };
    return next();
  }
};
export const getAccountById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = res.locals._id;

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
export const getallaccounts = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Account.find({})
    .then((users) => {
      if (users) {
        res.locals.json = {
          statusCode: 200,
          data: users,
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
export const updateAccountById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { firstName, lastName, email, phoneNumber } = req.body;
  const userId = req.params.id;
  await Account.findByIdAndUpdate(
    { _id: userId },
    { firstName, lastName, email, phoneNumber }
  )
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

export const deleteAccountById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.id;

  Account.deleteOne({ _id: userId })
    .then((result) => {
      if (result.deletedCount && result.deletedCount === 1) {
        res.locals.json = {
          statusCode: 200,
          data: "User deleted successfully",
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
export const forgetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const sender = req.params.id;
    const user = await Account.findById(sender);
    const tag = "Emergent";
    const reciever = new ObjectId("647c9b8b18398bdc020ee99b");
    const recieverUser = await Account.findById(reciever);
    const description =
      "Dear " +
      recieverUser.firstName +
      " employee " +
      user.firstName +
      " " +
      user.lastName +
      " has forgotten their password";
    const newNotification = new Notification({
      reciever,
      sender,
      tag,
      description,
    });
    newNotification.save();
    if (!newNotification) {
      res["locals"].json = {
        statusCode: 500,
        message: "error occured",
      };
      return next();
    }
    res["locals"].json = {
      statusCode: 200,
      data: newNotification,
    };
    return next();
  } catch (error) {
    console.log(error);
    res["locals"].json = {
      statusCode: 500,
      message: "error occured",
    };
    return next();
  }
};
export const getAccount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const accounts = await Account.find();
    res.locals.json = {
      statusCode: 200,
      data: accounts,
    };
    return next();
  } catch (error) {
    res["locals"].json = {
      statusCode: 500,
      message: "error occured",
    };
    return next();
  }
};
export const aprove = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const randomPassword: string = randomstring.generate(10);
    const hashedPassword = await bcrypt.hash(randomPassword, 10);
    const sender = req.params.id;
    const result = await Account.updateOne(
      { _id: sender },
      { $set: { password: hashedPassword } }
    );

    if (result != null) {
      console.log("User password updated successfully");
    } else {
      res.locals.json = {
        statusCode: 500,
        message: "User not found.",
      };
      return next();
    }
    const user = await Account.findById(sender);
    const mailOptions = {
      from: "aauhumanresource@gmail.com",
      to: user.email as string,
      subject: "New password",
      text: "password: " + randomPassword,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!", info.response);

    res.locals.json = {
      statusCode: 200,
      message: "Password changed Successfully.",
    };
    return next();
  } catch (err) {
    console.log(err);
    res.locals.json = {
      statusCode: 500,
      message: "error occured",
    };
    return next();
  }
};

export const rejectNotification = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const sender = req.params.id;
    const user = await Account.findById(sender);
    const mailOptions = {
      from: "aauhumanresource@gmail.com",
      to: user.email as string,
      subject: "New password denied",
      text: "We cant provide you with a new password for more information visite the HR office of AAU",
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!", info.response);

    res.locals.json = {
      statusCode: 200,
      message: "Password denied Successfully.",
    };
    return next();
  } catch (err) {
    console.log(err);
    res.locals.json = {
      statusCode: 500,
      message: "error occured",
    };
    return next();
  }
};

export const resetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const hashedpass = await bcrypt.hash(req.body.password, 10);
    const userName = req.body.userName;
    const sender = req.params.id;
    const result = await Account.updateOne(
      { _id: sender },
      { $set: { password: hashedpass, userName: userName } }
    );

    if (result != null) {
      console.log("User password updated successfully");
    } else {
      res.locals.json = {
        statusCode: 500,
        message: "User not found.",
      };
      return next();
    }
    const user = await Account.findById(sender);
    const mailOptions = {
      from: "aauhumanresource@gmail.com",
      to: user.email as string,
      subject: "New password",
      text: "password: " + req.body.password,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!", info.response);

    res.locals.json = {
      statusCode: 200,
      message: "Password changed Successfully.",
    };
    return next();
  } catch (err) {
    console.log(err);
    res.locals.json = {
      statusCode: 500,
      message: "error occured",
    };
    return next();
  }
};
export const changePassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body.password);
    const hashedpass = await bcrypt.hash(req.body.password, 10);

    const sender = req.params.id;
    const result = await Account.updateOne(
      { _id: sender },
      { $set: { password: hashedpass } }
    );

    if (result != null) {
      console.log("User password updated successfully");
    } else {
      res.locals.json = {
        statusCode: 500,
        message: "User not found.",
      };
      return next();
    }
    const user = await Account.findById(sender);
    const mailOptions = {
      from: "aauhumanresource@gmail.com",
      to: user.email as string,
      subject: "New password",
      text: "password: " + req.body.password,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!", info.response);

    res.locals.json = {
      statusCode: 200,
      message: "Password changed Successfully.",
    };
    return next();
  } catch (err) {
    console.log(err);
    res.locals.json = {
      statusCode: 500,
      message: "error occured",
    };
    return next();
  }
};
export const search = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const keyword = req.params.keyword || "";

    const users = await Account.find({
      firstName: { $regex: `${keyword}`, $options: "i" },
    });

    res.locals.json = {
      statusCode: 200,
      data: users,
    };
    return next();
  } catch (err) {
    console.log(err);
    res.locals.json = {
      statusCode: 500,
      message: "error occured",
    };
    return next();
  }
};
export const convertToExcel = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const directory = req.body.directory || "uploads"; // Default directory is 'uploads'
    const fileName = req.body.filename || "file.xlsx"; // Default file name is 'file.xlsx'
    const filePath = `${directory}/${fileName}`;
    const name = req.body.name;
    const keyword = req.body.keyword || "";

    // Query data from MongoDB collection
    const jsonData = await Account.find({
      firstName: { $regex: `${keyword}`, $options: "i" },
    });

    // Convert JSON to worksheet
    const worksheet = XLSX.utils.json_to_sheet(jsonData);

    // Create workbook and add the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Generate a temporary file path
    //const filePath = `output6.xlsx`;

    // Write workbook to the file path
    XLSX.writeFile(workbook, filePath);

    console.log("Excel file created successfully.");

    // Set the response headers to trigger the file download

    // Write workbook to file
    XLSX.writeFile(workbook, filePath);

    // Set the response headers to trigger the file download
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader("Content-Disposition", 'attachment; filename="file.xlsx"');

    // Stream the file to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);

    // Delete the temporary file after download
    fileStream.on("end", () => {
      fs.unlinkSync(filePath);
    });

    res.locals.json = {
      statusCode: 200,
      message: "Excel file generated successfully.",
    };
    return next();
  } catch (err) {
    console.log(err);
    res.locals.json = {
      statusCode: 500,
      message: "error occured",
    };
    return next();
  }
};
