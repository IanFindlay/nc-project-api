const { FieldValue } = require("@google-cloud/firestore");
const db = require("../db/connection");

exports.fetchUsers = async () => {
  const users = db.collection("users");
  const snapshot = await users.get();
  data = [];
  snapshot.forEach((doc) => {
    data.push({ userId: doc.id, info: doc.data() });
  });

  return data;
};

exports.addUser = async (lat, long, userInfo) => {
  userInfo.lat = lat;
  userInfo.long = long;
  delete userInfo.postcode;
  const newUser = await db.collection("users").add(userInfo);
  return newUser.id;
};

exports.fetchUserByUserId = async (userId) => {
  const doc = await db.collection("users").doc(userId).get();
  return { userId: doc.id, info: doc.data() };
};

exports.removeUserByUserId = async (userId) => {
  const doc = await db.collection("users").doc(userId).delete();
  return doc;
};

exports.updateUserByUserId = async (userId, updatedFields) => {
  return await db.collection("users").doc(userId).update(updatedFields);
};

exports.addPetByUserId = async (userId, newPetInfo) => {
  const petId = await db.collection("pets").add(newPetInfo);
  await db
    .collection("users")
    .doc(userId)
    .update({
      pets: FieldValue.arrayUnion({ petId: petId.id, ...newPetInfo }),
    });
};

exports.fetchPetsByUserId = async (userId) => {
  const userRef = await db.collection("users").doc(userId).get();
  return userRef.data().pets;
};
