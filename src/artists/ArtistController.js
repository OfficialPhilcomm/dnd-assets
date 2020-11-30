import ArtistData from "./artists.json";

export default class ArtistController {
  static get artists() {
    return (ArtistController._artists =
      ArtistController._artists || ArtistData.artists);
  }

  static getArtistByName(name) {
    const result = ArtistController.artists.filter(
      (artist) => artist.name === name
    );

    return result.length === 1 ? result[0] : undefined;
  }
}
