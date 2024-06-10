module.exports = appInfo => {
  const config = (exports = {
    keys: appInfo.name + '_1715954266639_7366',
    middleware: [],
    security: {
      csrf: {
        enable: true,
      },
    },
    // view: {
    //   defaultViewEngine: "nunjucks",
    //   mapping: {
    //     ".html": "nunjucks",
    //   },
    // },
    sequelize: {
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'login',
      username: 'Your Username',
      password: 'Your Password',
      define: {
        freezeTableName: true,
        timestamps: false,
      },
    },
  });

  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
