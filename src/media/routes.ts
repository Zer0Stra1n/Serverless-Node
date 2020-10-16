import {Router as router} from 'express';
import MediaService from './media.service';

const mediaService = new MediaService();

const routes = router({
  mergeParams: true,
});

routes.get('/', async (req, res) => {
  let data;
  try {
    data = await mediaService.getMovieList();
  } catch (e) {
    return res.status(500).json(e);
  }
  return res.status(200).json(data);
});

// routes.get('/pop', async(req, res) => {
//   try {
//     await mediaService.populateMovies();
//   } catch (e){

//   }
//   return res.status(200).json({status: 'done'})
// });

export default routes;
