import connection from '../../connection';

/**
 * Class used to retrieve media information
 */
export default class MediaService {
  db = connection.getDBConnection();
  /**
   * Fetchs fake data from the JSON file
   * @return {Array} Movie Json - An array of movie info
   */
  async getMovieList() {
    let data;
    try {
      data = this.db.query('select id, title, poster from movies');
    } catch (e) { 
      throw e;
    }

    return data;
  }
}
