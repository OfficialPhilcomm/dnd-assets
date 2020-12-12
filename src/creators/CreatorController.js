import CreatorData from "./creators.json";

export default class CreatorController {
  static get creators() {
    return (CreatorController._creators =
      CreatorController._creators || CreatorData.creators);
  }

  static getCreatorByTag(tag) {
    const result = CreatorController.creators.filter(
      (creator) => creator.tag === tag
    );

    return result.length === 1 ? result[0] : undefined;
  }
}
