/**
 * Return a new object that is a copy of the original object, but with the specified keys removed.
 *
 * The function takes two arguments:
 * @param {U} obj - The object to exclude keys from.
 * @param {Key[]} keys - The array of keys to exclude from the object.
 * @returns The function returns a new object that is a copy of the original object, but with the specified keys removed
 */
export function exclude<U, Key extends keyof U>(
  obj: U,
  keys: Key[],
): Omit<U, Key> {
  const newObj: U = Object.assign({}, obj);

  for (const key of keys) {
    delete newObj[key];
  }
  return newObj;
}

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
