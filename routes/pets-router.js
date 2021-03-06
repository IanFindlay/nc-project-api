const petsRouter = require("express").Router();

const {
  getPets,
  getPetById,
  deletePetById,
  patchPetByPetId,
} = require("../controllers/pets.controller");

petsRouter.route("/").patch(getPets);
petsRouter
  .route("/:petId")
  .get(getPetById)
  .delete(deletePetById)
  .patch(patchPetByPetId);

module.exports = petsRouter;
