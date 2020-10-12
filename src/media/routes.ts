'use strict';
import { Router } from 'express';

const routes = Router({
    mergeParams: true
});

routes.get('/', (req, res) => {
    res.status(200).json({hello: 'world'});
});

export default routes;