/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  const apiRouter = router.namespace('/api');

  const loginRouter = apiRouter.namespace('/user');
  loginRouter
    .post('/:id/login', controller.auth.register)
    .post('/register', controller.auth.register)
    .put('/pwd', controller.auth.register);
};
