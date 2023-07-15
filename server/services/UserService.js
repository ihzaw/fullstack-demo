const { DataTypes } = require("sequelize");
const { sequelize } = require("../models");
const UserModel = require("../models/user")(sequelize, DataTypes);

const userExists = async ({ username }) => {
  try {
    const found = await UserModel.findOne({
      where: { username },
      raw: true,
      attributes: ["username"],
    });
    if (!found) throw new Error ('User not found')
    return found
  } catch (err) {
    return err
  }
}

module.exports = {
  userExists
}