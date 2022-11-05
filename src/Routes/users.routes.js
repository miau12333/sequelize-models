const { Router } = require("express");
const { getAllUsers } = require("../Controllers/users.controllers");

const router = Router();

// para obtener a todos los usuarios --> get
router.get("/users", getAllUsers);

module.exports = router;
