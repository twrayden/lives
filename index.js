(function(isNode) {
  'use strict';
  function ow(arg, type) {
    if (typeof arg !== type) {
      throw new TypeError('Expected argument of type ' + type);
    }
  }
  /**
   * Lives
   *
   * Returns true if value exists or false if value is missing.
   *
   * @param {function} attempt
   * @returns {boolean}
   */
  function lives(attempt) {
    ow(attempt, 'function');
    var value;
    try {
      value = attempt();
    } catch (err) {
      value = undefined;
    } finally {
      return value !== undefined;
    }
  }

  /**
   * Lives.key
   *
   * (Using key) Returns true if value exists or false if value is missing.
   *
   * @param {object} target
   * @param {string} key
   * @returns {boolean}
   */
  lives.key = function(target, key) {
    ow(target, 'object');
    ow(key, 'string');
    var path = key.split('.');
    for (var i = 0; i < path.length; i++) {
      if (!target || !target.hasOwnProperty(path[i])) {
        return false;
      }
      target = target[path[i]];
    }
    return true;
  };

  /**
   * Lives.not
   *
   * Returns true if value is missing or false if value exists.
   *
   * @param {function} attempt
   * @returns {boolean}
   */
  lives.not = function(attempt) {
    ow(attempt, 'function');
    var value;
    try {
      value = attempt();
    } catch (err) {
      value = undefined;
    } finally {
      return value === undefined;
    }
  };

  /**
   * Lives.get
   *
   * Returns value or undefined if value is missing.
   *
   * @param {function} attempt
   * @returns {any}
   */
  lives.get = function(attempt) {
    ow(attempt, 'function');
    var value;
    try {
      value = attempt();
    } catch (err) {
      value = undefined;
    } finally {
      return value;
    }
  };

  /**
   * Lives.or
   *
   * Returns value or fallback if value is missing or undefined.
   *
   * @param {function} attempt
   * @param {any} fallback
   * @returns {any}
   */
  lives.or = function(attempt, fallback) {
    ow(attempt, 'function');
    var value;
    try {
      value = attempt();
      if (value == null) {
        throw new Error('Value undefined');
      }
    } catch (err) {
      value = fallback;
    } finally {
      return value;
    }
  };

  /**
   * Lives.is
   *
   * Returns true if value matches type specified or false if it doesn't.
   *
   * @param {function} attempt
   * @param {string} type
   * @returns {boolean}
   */
  lives.is = function(attempt, type) {
    ow(attempt, 'function');
    ow(type, 'string');
    var value;
    try {
      value = attempt();
    } catch (err) {
      value = undefined;
    } finally {
      return typeof value === type;
    }
  };

  if (isNode) {
    module.exports = lives;
  } else {
    window['lives'] = lives;
  }
})(
  typeof module === 'object' &&
    module &&
    typeof module.exports === 'object' &&
    module.exports
);
