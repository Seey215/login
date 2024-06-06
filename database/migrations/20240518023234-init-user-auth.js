'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { INTEGER, BIGINT, STRING } = Sequelize;
    await queryInterface.createTable('tbl_user_auth', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      username: { type: STRING(30), allowNull: false },
      pwdHash: { type: STRING(30), allowNull: false },
      pwdSalt: { type: STRING(30), allowNull: false },
      created_at: { type: BIGINT },
      updated_at: { type: BIGINT },
    }, {
      index: [{
        name: 'username',
        unique: true,
        fields: [ 'username' ],
      }],
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('tbl_user_auth');
  },
};
