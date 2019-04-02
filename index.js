/**
 * Lives
 * @param {function} attempt
 */
function lives(attempt) {
  let value;
  try {
    value = attempt();
  } catch (err) {
    value = undefined;
  } finally {
    return value !== undefined;
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
