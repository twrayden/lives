module.exports = (object, path) => {
  const check = { ...object };
  try {
    eval(`check.${path}`);
    return true;
  } catch(err) {
    return false;
  }
}