import connection from '../connection';
// import fake from './movie_fake.json';

/**
 * Class used to retrieve media information
 */
export default class MediaService {
  db = connection.dbConnection;
  /**
   * Fetchs fake data from the JSON file
   * @return {Array} Movie Json - An array of movie info
   */
  async getMovieList() {
    let data;
    try {
      data = await this.db.query('select id, title, poster from movies');
    } catch (e) {
      throw e;
    }

    return data.records;
  }


  async getMovie(params) {
    let data;
    if (params.mediaId){
      try {
        data = await this.db.query('select * from movies where id = :id', [{id: `${params.mediaId}`}]);
      } catch(e) {
        throw e;
      }
    } else {
      throw new Error('Missing Identifier: Media Id is missing from request');
    }

    if (data.records.length){
      data = data.records[0]
      data.ratings = JSON.parse(data.ratings);
    } else {
      data = {};
    }

    return data;
  }

  /**
   * Pushes data into the movies db
   */
  // async populateMovies() {
  //   const data = fake.movies;
  //   const keys = Object.keys(data[0]);
  //   const updated = keys.map(item => `:${item}`);

  //   data.forEach(async(movie:any) => {
  //     movie.ratings = JSON.stringify(movie.ratings);
  //     movie.vintage = parseInt(movie.vintage, 10);

  //     try{
  // eslint-disable-next-line max-len
  //       const inserted = await this.db.query('select * from movies where id = :id', [{id: `${movie.id}`}]);
  //       if (!inserted.records.length){
  // eslint-disable-next-line max-len
  //         await this.db.query(`insert into movies (${keys.toString()}) values(${updated.toString()})`, movie);
  //       }
  //     } catch (e) {
  //       console.log(movie)
  //       throw e;
  //     }

  //   });
  // };
}
