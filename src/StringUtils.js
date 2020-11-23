export default class StringUtils {
  static getItemById(itemId) {
    return this.items.filter((item) => item.id === itemId)[0] || null;
  }

  static deepEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (const key of keys1) {
      const val1 = object1[key];
      const val2 = object2[key];
      const areObjects = this.isObject(val1) && this.isObject(val2);
      if (
        (areObjects && !this.deepEqual(val1, val2)) ||
        (!areObjects && val1 !== val2)
      ) {
        return false;
      }
    }

    return true;
  }

  static isObject(object) {
    return object != null && typeof object === "object";
  }

  static distinct(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
  }

  static poundsToKilogram(lbs) {
    return Math.round(lbs * 0.45359237 * 100) / 100;
  }
}
