import mongoose from "mongoose";
import Test from "../models/test.js";
import Log from "../models/log.js";

export const getAllTests = async (req, res) => {
  try {
    const tests = await Test.find({
      author: { $ne: mongoose.Types.ObjectId(req.userId) },
    });
    res.status(200).json(tests);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const addTest = async (req, res) => {
  const { description, answers, right } = req.body;
  try {
    await Test.create({
      author: req.userId,
      image: req.file ? req.file.filename : null,
      description,
      answers: answers.split(","),
      right,
    });
    res.status(200).json({ message: "Test Created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Create test failed" });
  }
};

export const takeTest = async (req, res) => {
  const { testId, right } = req.body;
  try {
    const test = await Test.findOne({ _id: testId });
    const log = await Log.create({
      user: req.userId,
      test: testId,
      result: test.right === parseInt(right) ? true : false,
    });
    res.status(200).json({ message: log.result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Test failed" });
  }
};

export const getLogs = async (req, res) => {
  try {
    const logs = await Log.aggregate([
      {
        $match: {
          user: mongoose.Types.ObjectId(req.userId),
        },
      },
      {
        $lookup: {
          from: "tests",
          localField: "test",
          foreignField: "_id",
          as: "test",
        },
      },
      {
        $project: {
          user: 1,
          test: {
            $arrayElemAt: ["$test", 0],
          },
          result: 1,
        },
      },
    ]);
    res.status(200).json(logs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
