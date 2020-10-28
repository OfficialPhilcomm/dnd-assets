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
    {
      id: "b33541f1-779b-487a-931c-608a56f43e8e",
      name: "Runed Scimitar",
      description:
        "Raiders that make their home in the desert have been known to use areas of strong elemental magic to enhance their equipment. This sword is capable of summoning the sands from the endless deserts of the plain of earth.",
      playerLevel: 1,
      rarity: 1,
      racialOrigin: "human",
      unique: false,
      itemType: "sword",
      cursed: false,
      damage: "1D6+1 Slashing",
      weight: 1.5,
      properties: "+1 Magical Weapon, Finesse, Light",
    },
  ];

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
