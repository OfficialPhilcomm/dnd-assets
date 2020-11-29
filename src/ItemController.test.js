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

  const itemAttributes = [
    "id",
    "name",
    "description",
    "playerLevel",
    "rarity",
    "racialOrigin",
    "unique",
    "itemType",
    "cursed",
    "damage",
    "weight",
    "properties",
    "customProperties",
    "armorClass",
    "hitPoints",
    "speed",
    "skills",
    "elementalType",
  ];

  const idRegex = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
  const racialOrigins = ["human", "fiendish", "elven"];
  const itemTypes = ["sword", "helmet", "gauntlet", "boots"];
  const elementalTypes = ["normal", "fire", "ice", "nature"];

  items.forEach((item) => {
    test(`in item ${item.name || "name missing"}`, () => {
      Object.keys(item).forEach((key) => {
        expect(itemAttributes).toContain(key);
      });

      expect(item.id).toBeDefined();
      expect(typeof item.id).toEqual("string");
      expect(item.id).toMatch(idRegex);

      expect(item.name).toBeDefined();
      expect(typeof item.name).toEqual("string");

      expect(item.description).toBeDefined();
      expect(typeof item.description).toEqual("string");

      expect(item.playerLevel).toBeDefined();
      expect(typeof item.playerLevel).toEqual("number");
      expect(item.playerLevel).toBeGreaterThanOrEqual(0);
      expect(item.playerLevel).toBeLessThanOrEqual(3);

      expect(item.rarity).toBeDefined();
      expect(typeof item.rarity).toEqual("number");
      expect(item.rarity).toBeGreaterThanOrEqual(0);
      expect(item.rarity).toBeLessThanOrEqual(2);

      expect(item.racialOrigin).toBeDefined();
      expect(typeof item.racialOrigin).toEqual("string");
      expect(racialOrigins).toContain(item.racialOrigin);

      expect(item.unique).toBeDefined();
      expect(typeof item.unique).toEqual("boolean");

      expect(item.itemType).toBeDefined();
      expect(typeof item.itemType).toEqual("string");
      expect(itemTypes).toContain(item.itemType);

      expect(item.cursed).toBeDefined();
      expect(typeof item.cursed).toEqual("boolean");

      if (item.damage) {
        expect(typeof item.damage).toEqual("string");
      }

      expect(item.weight).toBeDefined();
      expect(typeof item.weight).toEqual("number");

      if (item.properties) {
        expect(typeof item.properties).toEqual("string");
      }

      if (item.customProperties) {
        item.customProperties.forEach((customProperty) => {
          expect(customProperty.name).toBeDefined();
          expect(typeof customProperty.name).toEqual("string");

          expect(customProperty.text).toBeDefined();
          expect(typeof customProperty.text).toEqual("string");

          expect(Object.keys(customProperty).length).toEqual(2);
        });
      }

      if (item.armorClass) {
        expect(typeof item.armorClass).toEqual("number");
        expect(item.armorClass).toBeGreaterThanOrEqual(1);
      }

      if (item.hitPoints) {
        expect(typeof item.hitPoints).toEqual("number");
        expect(item.hitPoints).toBeGreaterThanOrEqual(1);
      }

      if (item.speed) {
        expect(typeof item.speed).toEqual("string");
      }

      if (item.skills) {
        expect(typeof item.skills).toEqual("string");
      }

      expect(item.elementalType).toBeDefined();
      expect(typeof item.elementalType).toEqual("string");
      expect(elementalTypes).toContain(item.elementalType);
    });
  });
});
