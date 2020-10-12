'use strict';
import { Router } from 'express';
import fakeData from './movie_fake.json';

const routes = Router({
    mergeParams: true
});

routes.get('/', (req, res) => {
    res.status(200).json(fakeData);
});

export default routes;