const { DataTypes } = require("sequelize");
const { sequelize } = require("../models");
const { signToken } = require("../helpers/jwt");
const UserModel = require("../models/user")(sequelize, DataTypes);

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) throw { code: 401, message: "Bad Request" };

    const user = await UserModel.findOne({
      where: { username, password },
      raw: true,
      attributes: ["username"],
    });
    if (!user) throw { code: 404, message: "user not found" };

    const token = signToken(user);
    res.setHeader("token", token);
    res.status(200).json({ code: 200, message: "success" });
  } catch (err) {
    res.status(err.code).json(err);
  }
};

module.exports = {
  login,
};
