function lives(object, path) {
  const check = { ...object };
  try {
    eval(`check.${path}`);
    return true;
  } catch (err) {
    return false;
  }
}

lives.get = function(object, path) {
  const check = { ...object };
  try {
    return eval(`check.${path}`);
  } catch (err) {
    return undefined;
  }
};


module.exports = lives;
