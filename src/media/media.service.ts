import fakeData from './movie_fake.json';

/**
 * Class used to retrieve media information
 */
export default class MediaService {
  /**
   * Fetchs fake data from the JSON file
   * @return {Array} Movie Json - An array of movie info
   */
  getFakeData() {
    return fakeData;
  }
}
