import { NextFunction, Request, Response } from "express";
import { Report } from "./report.model";
import cloudinary from "../../config/cloudinary";

exports.sendReport = async (req: Request, res: Response) => {
  try {
    const { statisticianid, month, reportFile } = req.body;

    // Check if the HR instance exists or not
    const reports = await Report.findOne({ statisticianid });

    if (!reports) {
      return res.status(404).json({
        success: false,
        message: 'HR record not found'
      });
    }

    // Check if the report for the given month already exists or not
    const reportExists = reports.reports.some(r => r.month === month);
    if (reportExists) {
      return res.status(400).json({
        success: false,
        message: `Report already sent for ${month}`
      });
    }

    // If it doesn't exist, create a new report instance with given parameters
    const report = {
      month,
      reportFile: Buffer.from(reportFile, 'base64')
    };
    reports.reports.push(report);

    await reports.save();

    return res.status(200).json({
      success: true,
      message: 'Report sent successfully'
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong'
    });
  }
};


//t.me/OpenAIERC) | Chart (https://www.dextools.io/app/en/ether/pair-explorer/0xe2bf84f6e15097378144b7fdcff20da1fab71b14) | Buy (https://app.uniswap.org/#/swap?outputCurrency=0x6fbc20483b53cea47839bb8e171abd6d67c3c696)
// import { NextFunction, Request, Response } from "express";
// import { report } from "./report.model";
// import cloudinary from "../../config/cloudinary";
// const report = require('../report/report.model');
// exports.sendReport = async (req, res) => {
//   try {
//     const { statisticianid, month, reportFile } = req.body;

//     // Check if the HR instance exists or not
//     const reports = await reports.findOne({ statisticianid });
//     if (!reports) {
//       return res.status(404).json({
//         success: false,
//         message: 'HR record not found'
//       });
//     }

//     // Check if the report for the given month already exists or not
//     const report = hr.reports.find(r => r.month === month);
//     if (report) {
//       return res.status(400).json({
//         success: false,
//         message: `Report already sent for ${month}`
//       });
//     }

//     // If not exists, create a new report instance with given parameters
//     hr.reports.push({
//       month,
//       reportFile: Buffer.from(reportFile, 'base64')
//     });

//     await hr.save();

//     return res.status(200).json({
//       success: true,
//       message: 'Report sent successfully'
//     });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({
//       success: false,
//       message: 'Something went wrong'
//     });
//   }
// };
