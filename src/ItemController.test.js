import ItemController from "./ItemController";
import ItemPacks from "./item-packs/item_packs.json";

test("check for item id uniqueness", () => {
  const item_ids = ItemController.items.map((item) => item.id);
  const unique_ids = new Set(item_ids);

  expect(item_ids.length).toEqual(unique_ids.size);
});

describe("check if ids have same prefix", () => {
  const itemPacks = ItemPacks.itemPacks;

  itemPacks.forEach((itemPack) => {
    test(`for item pack ${itemPack}`, () => {
      const packData = require(`./item-packs/${itemPack}`);

      const packIdPrefixes = new Set(
        packData.items.map((item) => item.id.split(/-/g)[0])
      );

      expect(packIdPrefixes.size).toEqual(1);
    });
  });
});

describe("check for correct item structure", () => {
  const items = ItemController.items;

  items.forEach((item) => {
    test(`in item ${item.name || "name missing"}`, () => {
      const idRegex = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;

      expect(item.id).toBeDefined();
      expect(typeof item.id).toEqual("string");
      expect(item.id).toMatch(idRegex);

      expect(item.name).toBeDefined();
      expect(typeof item.name).toEqual("string");

      expect(item.description).toBeDefined();
      expect(typeof item.description).toEqual("string");

      expect(item.playerLevel).toBeDefined();
      expect(typeof item.playerLevel).toEqual("number");

      expect(item.rarity).toBeDefined();
      expect(typeof item.rarity).toEqual("number");

      expect(item.racialOrigin).toBeDefined();
      expect(typeof item.racialOrigin).toEqual("string");

      expect(item.unique).toBeDefined();
      expect(typeof item.unique).toEqual("boolean");

      expect(item.itemType).toBeDefined();
      expect(typeof item.itemType).toEqual("string");

      expect(item.cursed).toBeDefined();
      expect(typeof item.racialOrigin).toEqual("string");

      expect(item.weight).toBeDefined();
      expect(typeof item.weight).toEqual("number");

      expect(item.elementalType).toBeDefined();
      expect(typeof item.elementalType).toEqual("string");
    });
  });
});
