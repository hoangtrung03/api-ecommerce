"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = __importDefault(require("../../controllers/category.controller"));
const category_middleware_1 = __importDefault(require("../../middleware/category.middleware"));
const helpers_middleware_1 = __importDefault(require("../../middleware/helpers.middleware"));
const response_1 = require("../../utils/response");
const commonCategoryRouter = (0, express_1.Router)();
commonCategoryRouter.get('/', category_middleware_1.default.getCategoryRules(), helpers_middleware_1.default.entityValidator, (0, response_1.wrapAsync)(category_controller_1.default.getCategories));
commonCategoryRouter.get('/:category_id', helpers_middleware_1.default.idRule('category_id'), helpers_middleware_1.default.idValidator, (0, response_1.wrapAsync)(category_controller_1.default.getCategory));
exports.default = commonCategoryRouter;
