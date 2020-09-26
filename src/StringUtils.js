export default class StringUtils {
  static items = [
    {
      id: "6f1ac1a1-b4d7-44d3-b12f-f4955dfed557",
      name: "Galadriel’s Edge",
      description:
        "Long ago the great Elven king Galadriel travelled into a dark land of shadow and evil. Legends say Galadriel vanished, perhaps falling in battle or captured by his enemy, non can say for sure. What is known however is the a year after Galadriel entered the shadowed lands his horse returned home, carrying on his sword and scabbard.",
      playerLevel: 1,
      rarity: 1,
      racialOrigin: "human",
      unique: false,
      itemType: "sword",
      cursed: false,
      damage: "1D8+1 Slashing",
      weight: 1.5,
      properties: "versatile (1D10)",
    },
  ];

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
}
