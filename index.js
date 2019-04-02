/**
 * Lives
 * @param {function} attempt
 */
function lives(attempt) {
  try {
    if (attempt()) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
}

/**
 * Lives.get
 * @param {function} attempt
 */
lives.get = function(attempt) {
  try {
    const result = attempt();
    return result;
  } catch (err) {
    return undefined;
  }
};

module.exports = lives;
