// const jwt = require("jsonwebtoken")
// const User = require("../../users/user.model")
// const Meme = require("../../memes/meme.model")
// const dotenv = require('dotenv')
// dotenv.config()

// const roles = Object.freeze({
//     ADMIN: 3,
//     USER: 2,
//     GUEST: 1,
// })

// const checkValidUserWithRole = async (req, res, next, roleLevel) => {
//     if (!req.headers.authorization) {
//         return res.status(401).send({ message: "Unauthorized" });
//     }

//     const token = req.headers.authorization.split(" ")[2];
//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const userID = decoded.id;
//         const user = await User.findById(userID);
//         if (!user) {
//             return res.status(403).send({ message: "The user that has this name can't be found!" });
//         }
//         const userLevel = roles[user.role]
//         if (userLevel && userLevel >= roleLevel) {
//             req.user = user;
//             return next();
//         }
//         return res.status(401).send({ message: "Unauthorized" });
//     } catch {
//         if (process.env.environment !== 'prod')
//             console.log("Token not valid. JWT failed.");
//         return res.sendStatus(401);
//     }
// }
// const userMiddleware = async (req, res, next) => {
//     await checkValidUserWithRole(req, res, next, roles.USER);
// };

// const adminMiddleware = async (req, res, next) => {
//     await checkValidUserWithRole(req, res, next, roles.ADMIN);
// }


// module.exports = {
//     userMiddleware,
//     adminMiddleware
// }