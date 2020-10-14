import MediaService from './media.service';
import fakeData from './movie_fake.json';

describe('MediaService', () => {
  const service = new MediaService();

  describe('getFakeData', () => {
    it('should return the fake data from JSON', () => {
      const result = service.getMovieList();
      expect(result).toEqual(fakeData);
    });
  });
});
