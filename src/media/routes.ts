import {Router as router} from 'express';
import MediaService from './media.service';

const mediaService = new MediaService();

const routes = router({
  mergeParams: true,
});

routes.get('/', (req, res) => {
  const data = mediaService.getFakeData();
  res.status(200).json(data);
});

export default routes;
