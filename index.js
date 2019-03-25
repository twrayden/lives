function lives(object, path) {
  const check = { ...object };
  try {
    const value = eval(`check.${path}`);
    if (value != null) {
      return true;
    } else {
      return false;
    }
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
