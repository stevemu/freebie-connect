async function updateProfile(db, userId, profile) {
  const collection = db.collection("profile");
  let result = await collection.findOneAndReplace({ userId }, profile, {
    upsert: true
  });
  return result;
}
exports.updateProfile = updateProfile;

async function getProfile(db, userId) {
  const collection = db.collection("profile");
  let result = await collection.findOne({ userId });

  if (!result) {
    let defaultProfile = {userId, name: ""};
    await collection.insertOne(defaultProfile);
    return defaultProfile;
  }

  return result;
}
exports.getProfile = getProfile;
