import ItemController from "./ItemController";
import ItemPacks from "./item-packs/item_packs.json";

test("check for item id uniqueness", () => {
  const item_ids = ItemController.items.map((item) => item.id);
  const unique_ids = new Set(item_ids);

  expect(item_ids.length).toEqual(unique_ids.size);
});

test("check for correct item id format", () => {
  const itemIds = ItemController.items.map((item) => item.id);
  const idRegex = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;

  itemIds.forEach((itemId) => {
    expect(itemId).toMatch(idRegex);
  });
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
