"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidId = exports.connectMongoDB = void 0;
require('dotenv').config();
//require mongoose module
const mongoose_1 = __importDefault(require("mongoose"));
//require chalk module to give colors to console text
const chalk_1 = __importDefault(require("chalk"));
//require database URL from properties file
const dbURL = `mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD_DB}@cluster0.8unqvwt.mongodb.net/myFirstDatabase`;
const connected = chalk_1.default.bold.cyan;
const error = chalk_1.default.bold.yellow;
const disconnected = chalk_1.default.bold.red;
const termination = chalk_1.default.bold.magenta;
//export this function and imported by server.js
const connectMongoDB = () => {
    mongoose_1.default.connect(dbURL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    });
    mongoose_1.default.connection.on("connected", function () {
        console.log(connected("Mongoose default connection is open to MongoDB Atlas"));
    });
    mongoose_1.default.connection.on("error", function (err) {
        console.log(error("Mongoose default connection has occured " + err + " error"));
    });
    mongoose_1.default.connection.on("disconnected", function () {
        console.log(disconnected("Mongoose default connection is disconnected"));
    });
    process.on("SIGINT", function () {
        mongoose_1.default.connection.close(function () {
            console.log(termination("Mongoose default connection is disconnected due to application termination"));
            process.exit(0);
        });
    });
};
exports.connectMongoDB = connectMongoDB;
const isValidId = (id) => {
    return mongoose_1.default.Types.ObjectId.isValid(id);
};
exports.isValidId = isValidId;
