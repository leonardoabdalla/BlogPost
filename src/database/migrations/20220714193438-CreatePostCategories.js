'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostCategories', {
      postId: {
        type: Sequelize.INTERGER,
        allowNull: false,
        referernces: {
          model: 'BlogPosts',
          key: 'id'
        }
      },
      categoryId: {
        type: Sequelize.INTERGER,
        allowNull: false,
        referernces: {
          model: 'Categories',
          key: 'id'
        }
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostCategories');
  }
};
