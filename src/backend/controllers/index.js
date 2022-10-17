const authController = require("./auth.controller");
const { isAuthenticated, isAdmin } = require("../middlewares/auth.middleware");
const userController = require("./user.controller");
// const carController = require("./car.controller");
// const borrowController = require("./borrow.controller");

module.exports = (app) => {
	app.use("/api/auth", authController);
	app.use("/api/user", [isAuthenticated, isAdmin], userController);
	// app.use("/car", [isAuthenticated], carController);
	// app.use("/borrow", [isAuthenticated], borrowController);
};
