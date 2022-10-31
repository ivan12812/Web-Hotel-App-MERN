const schema = require("./schema");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { config } = require("dotenv");

config();

exports.authenticate = (data) => {
	let { username, password } = data;

	return new Promise((resolve, reject) => {
		schema.UserSchema.findOne({ username }, (err, response) => {
			if (err) {
				reject(err);
			}

			if (response) {
				const passwordFromDB = response.password;
				const passwordFromUser = crypto
					.pbkdf2Sync(password, response.salt, 1000, 64, `sha512`)
					.toString(`hex`);

				if (passwordFromDB == passwordFromUser) {
					const isActive = response.status === "Active";

					if (isActive) {
						const data = {
							id: response._id,
							username: response.username,
							name: response.name,
							role: response.role,
						};
						const token = jwt.sign(
							data,
							"t7w!z%C*F-JaNdRgUkXp2r5u8x/A?D(G+KbPeShVmYq3t6v9y$B&E)H@McQfTjWn",
							{
								expiresIn: "1800s",
								algorithm: "HS256",
							}
						);
						resolve(token);
					} else {
						reject("Your account is inactive");
					}
				} else {
					reject("You have entered an invalid username or password");
				}
			} else {
				reject("You have entered an invalid username or password");
			}
		});
	});
};

exports.authToken = (token) => {
	return new Promise((resolve, reject) => {
		jwt.verify(
			token,
			"t7w!z%C*F-JaNdRgUkXp2r5u8x/A?D(G+KbPeShVmYq3t6v9y$B&E)H@McQfTjWn",
			(err, user) => {
				if (err) {
					reject(err);
				} else {
					resolve(user);
				}
			}
		);
	});
};
