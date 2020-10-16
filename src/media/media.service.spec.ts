import MediaService from './media.service';
import {DBFake} from '../../config/test-constants';

describe('MediaService', () => {
  const service = new MediaService();
  const fakeRecords = [{
    title: 'hello',
    poster: 'some_url.biz',
    id: 'vifacerollkeys1',
  }];

  describe('getMovieList', () => {
    beforeEach(() => {
      service.db = new DBFake();
    });
    it('should return the fake data from JSON', async () => {
      service.db.data = fakeRecords;

      let result;

      try {
        result = await service.getMovieList();
      } catch (e) {
        expect(true).toBe(false);
      }

      expect(service.db.query).toBeCalledTimes(1);
      expect(service.db.query)
          .toHaveBeenCalledWith('select id, title, poster from movies');
      expect(result).toEqual(fakeRecords);
    });
    it('should pass errors up and out', async () => {
      jest.spyOn(service.db, 'query')
          .mockReturnValue(Promise.reject(new Error('nope')));

      let result;

      try {
        await service.getMovieList();
      } catch (e) {
        result = e;
      }

      expect(service.db.query).toBeCalledTimes(1);
      expect(service.db.query)
          .toHaveBeenCalledWith('select id, title, poster from movies');
      expect(result.message).toEqual('nope');
    });
  });
});
