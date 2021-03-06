export default function argsToFindOptions(args, target) {
  var result = {}
    , targetAttributes = Object.keys(target.rawAttributes);

  if (args) {
    Object.keys(args).forEach(function (key) {
      if (~targetAttributes.indexOf(key)) {
        result.where = result.where || {};
        result.where[key] = args[key];
      }

      if (key === 'limit' && args[key]) {
        result.limit = args[key];
      }

      if (key === 'offset' && args[key]) {
        result.offset = args[key];
      }

      if (key === 'order' && args[key]) {
        if (args[key].indexOf('reverse:') === 0) {
          result.order = [[args[key].substring(8), 'DESC']];
        } else {
          result.order = [[args[key], 'ASC']];
        }
      }
    });
  }

  return result;
}
