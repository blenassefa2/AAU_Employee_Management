import { NextFunction, Request, Response } from "express";
import { Result, IResultInterface } from "./results.model";
import mongoose, { ObjectId } from "mongoose";


// Controller action to create a new result
export const createResult = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Extract the necessary data from the request body
    const { result, tag, employeeId } = req.body;
    console.log(req.body)
    // Check if a result with the same employeeId and tag exists
    const existingResult = await Result.findOne({ employeeId, tag });
    console.log(existingResult)
    if (existingResult) {
      // Update the existing result with the average of the new and old result
      const updatedResult = {
        result: (existingResult.result + result) / 2,
      };

      const done  =await Result.findByIdAndUpdate(existingResult._id, updatedResult);
      console.log(done,"done")
    res.locals.json = {
          statusCode: 200,
          data: done,
        };
        
        return next();
       
    } 
    else {
      // Create a new result
      const newResult = new Result({
        result,
        tag: new mongoose.Types.ObjectId(tag),
        employeeId: new mongoose.Types.ObjectId(employeeId),
      });
      
      await newResult.save();
      console.log(newResult)
        res.locals.json = {
          statusCode: 200,
          data: newResult,
        };
        return next();
    }

    // Save the new Result document to the database
   
    // Send the created result as the response
    
  } catch (error) {
    // Handle any errors that occur during the creation process
    res.locals.json = {
      statusCode: 500,
      message: "error occurred",
    };
    return next();
  }
};

// Controller action to get a result by its ID
export const getResultById = async (req: Request, res: Response, next:NextFunction) => {
  try {
    // Extract the result ID from the request parameters
    const { id } = res.locals._id;
    //const id = req.body.id;
    // Find the result by its ID
    const result = await Result.findOne({employeeId: id});

    if (result) {
      // If the result is found, send it as the response
       res.locals.json = {
         statusCode: 200,
         data: result,
       };
       return next();
    } else {
      // If the result is not found, send a 404 response
      res.locals.json = {
        statusCode: 500,
        message: "error occurred",
      };
      return next();
    }
  } catch (error) {
    // Handle any errors that occur during the retrieval process
    res.locals.json = {
      statusCode: 500,
      message: "error occurred",
    };
    return next();
  }
};

// ... Other controller actions for updating, deleting, or fetching multiple results ...
