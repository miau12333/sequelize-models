// importar el modelo donde estaremos haciendo las consultas
const Users = require("../models/users.models");

class UserServices {
  static async getAll() {
    // select id, username, email from users;
    try {
      const result = await Users.findAll({
        attributes: ["id", "username", "email"],
      }); // select * from users;
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
