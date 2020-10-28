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
    {
      id: "1f02b2a5-0a45-4b47-bfeb-d832abbfc3d5",
      name: "Golden Helmet",
      description:
        "Heroes of great renown are capable of inspiring their fellows with powerful words and mighty actions. Sometimes those deeds empower their equipment and when they leave this world others may fight in their stead, benefitting from a mote of their power.",
      playerLevel: 1,
      rarity: 1,
      racialOrigin: "human",
      unique: false,
      itemType: "sword",
      cursed: false,
      weight: 2,
      properties: "+1 Charisma",
    },
    {
      id: "f14bf414-76cc-4abc-8f9c-7e7e48ff6def",
      name: "Fiend’s Hood",
      description:
        "Said to be the cowl worn by executions of the nine hells, this dark item bestows a power on the user to aid in their slaughter but that takes its toll on the body over time.",
      playerLevel: 1,
      rarity: 1,
      racialOrigin: "fiendish",
      unique: false,
      itemType: "sword",
      cursed: false,
      weight: 0.5,
      properties:
        "Whilst wearing this hood, if the user slays an enemy a wave of fear washes over their allies. All enemy creatures within 15ft must make a DC15 Wisdom Saving Throw.",
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
