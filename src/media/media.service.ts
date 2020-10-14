import connection from '../connection';
// import fake from './movie_fake.json';

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
      data = await this.db.query('select id, title, poster from movies');
    } catch (e) { 
      throw e;
    }

    return data.records;
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
  //       const inserted = await this.db.query('select * from movies where id = :id', [{id: `${movie.id}`}]);
  //       if (!inserted.records.length){
  //         await this.db.query(`insert into movies (${keys.toString()}) values(${updated.toString()})`, movie);
  //       }
  //     } catch (e) {
  //       console.log(movie)
  //       throw e;
  //     }

  //   });
  // };
}
