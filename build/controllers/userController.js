"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUsers = void 0;
const userModel_1 = require("../models/userModel");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const findUser = yield userModel_1.userModel.find({});
    res.send(findUser);
});
exports.getUsers = getUsers;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // req.send(userCreate)
    const userCreate = yield userModel_1.userModel.create({ name: "name", email: "String@email.com", district: "bgd 28r horoo 102-89", Password: 976984792347, role: "admin" });
    res.send(userCreate);
});
exports.createUser = createUser;
// export const updateUser = async (req: express.Request, res: express.Response) => {
//     // req.send(userCreate)
//     const update = await userModel.create({ name: "${name}", email: "String@email.com", phoneNumber: 976984792347, role: "admin" })
//     res.send(update)
// }
