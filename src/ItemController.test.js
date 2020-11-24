import ItemController from "./ItemController";

test("check for item id uniqueness", () => {
  const item_ids = ItemController.items.map((item) => item.id);
  const unique_ids = new Set(item_ids);

  expect(item_ids.length).toEqual(unique_ids.size);
});
