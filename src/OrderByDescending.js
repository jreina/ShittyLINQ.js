const _defaultComparer = require('./.internal/_defaultComparer');

/**
 * @template T
 * @template U
 * @returns {Array<U>}
 * @this {Array<T>}
 */
function OrderByDescending(keySelector, comparer = _defaultComparer) {
  if (keySelector == null)
    throw 'Argument Null Exception - keySelector is null.';
  if (this === undefined) throw 'Undefined value exception!';
  if (this === null && typeof this === 'object') throw 'Null value exception!';
  return [...this].sort(function(a, b) {
    return comparer(keySelector(b), keySelector(a));
  });
}

module.exports = OrderByDescending;
