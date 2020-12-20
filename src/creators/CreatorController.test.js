import CreatorController from "./CreatorController";
import CreatorData from "./creators.json";

test("check for creator name uniqueness", () => {
  const creatorNames = CreatorController.creators.map(
    (creator) => creator.name
  );
  const uniqueNames = new Set(creatorNames);

  expect(creatorNames.length).toEqual(uniqueNames.size);
});

describe("check if creator has required tags", () => {
  const creators = CreatorController.creators.forEach((creator) => {
    test(`for creator ${creator.name}`, () => {
      expect(creator.tag).toBeDefined();
      expect(creator.name).toBeDefined();
      expect(creator.socialMedia).toBeDefined();
    });
  });
});

describe("check if creators has supported social media", () => {
  const supportedSocialMedia = ["instagram", "twitter", "youtube"];

  const creators = CreatorController.creators.forEach((creator) => {
    test(`for creator ${creator.name}`, () => {
      creator.socialMedia.forEach((socialMedia) => {
        expect(supportedSocialMedia).toContain(socialMedia.platform);
      });
    });
  });
});
