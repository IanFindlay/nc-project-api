const { fetchUsers } = require("../models/users.model");

exports.getUsers = (_, res, next) => {
  fetchUsers()
    .then((data) => {
      const users = data.map((user) => {
        return {
          userId: user.name.split("/").pop(),
          username: user.fields.username.stringValue,
        };
      });
      res.status(200).send({ users });
    })
    .catch(next);
};
