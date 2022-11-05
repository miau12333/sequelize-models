// importamos UserServices
const UserServices = require("../Services/users.services");

// controlador para obtener a todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
};
