const {
  getUsers,
  postUser,
  getUserByUserId,
  deleteUserByUserId,
  patchUserByUserId,
  getPetsByUserId,
  postPetByUserId,
  getReviewsForUserByUserId,
} = require("../controllers/users.controller");
const usersRouter = require("express").Router();

usersRouter.route("/").get(getUsers).post(postUser);

usersRouter
  .route("/:userId")
  .get(getUserByUserId)
  .delete(deleteUserByUserId)
  .patch(patchUserByUserId);

usersRouter.route("/:userId/pets").get(getPetsByUserId).post(postPetByUserId);

usersRouter.route("/:userId/reviews").get(getReviewsForUserByUserId);

module.exports = usersRouter;
