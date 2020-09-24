export default class StringUtils {
  static items = [
    {
      id: "6f1ac1a1-b4d7-44d3-b12f-f4955dfed557",
      name: "The Sword!",
      playerLevel: 1,
      rarity: 1,
      racialOrigin: "human",
      unique: false,
      itemType: "sword",
      cursed: false,
    },
    {
      id: "3c7efe5d-e23b-43e4-a40d-f0f818adf95f",
      name: "mystic spear",
      spriteUrl:
        "https://image.shutterstock.com/image-vector/scratchy-ink-drawing-spear-260nw-46828840.jpg",
      playerLevel: 1,
      rarity: 1,
      racialOrigin: "dwarfes",
      unique: false,
      itemType: "spear",
      cursed: false,
    },
    {
      id: "1593e239-2db0-4f99-b3c3-d8fe4767658d",
      name: "some sword",
      spriteUrl:
        "https://image.shutterstock.com/image-vector/sword-hand-drawn-sketch-vector-260nw-480665485.jpg",
      playerLevel: 2,
      rarity: 2,
      racialOrigin: "evlish",
      unique: true,
      itemType: "short_sword",
      cursed: false,
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
