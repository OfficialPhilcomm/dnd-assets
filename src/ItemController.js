import ItemPacks from "./item-packs/item_packs.json";

export default class ItemController {
  static get items() {
    return (ItemController._items =
      ItemController._items || ItemController.getAllItems());
  }

  static getAllItems() {
    var itemPacks = ItemPacks.itemPacks;
    itemPacks = itemPacks.map((itemPack) => {
      const packData = require(`./item-packs/${itemPack}`);
      return packData.items;
    });
    return itemPacks.flat(1);
  }
}
