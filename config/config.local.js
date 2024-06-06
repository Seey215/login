/* eslint valid-jsdoc: "off" */

module.exports = appInfo => {
  const config = (exports = {
    keys: appInfo.name + '_1715954266639_7366',
    sequelize: {
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'login',
      username: 'root',
      password: 'mysql8is250!',
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
