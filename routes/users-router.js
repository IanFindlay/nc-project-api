const {
  getUsers,
  postUser,
  getUserByUserId,
  deleteUserByUserId,
  patchUserByUserId,
  postPetByUserId,
} = require("../controllers/users.controller");
const usersRouter = require("express").Router();

usersRouter.route("/").get(getUsers).post(postUser);

usersRouter
  .route("/:userId")
  .get(getUserByUserId)
  .delete(deleteUserByUserId)
  .patch(patchUserByUserId);

usersRouter.route("/:userId/pets").post(postPetByUserId);

module.exports = usersRouter;
