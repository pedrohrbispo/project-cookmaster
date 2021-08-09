'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable('PostsCategories', {
     categoryId: {
       type: Sequelize.INTEGER,
       references: {
         model: 'Categories',
         key: 'id',
       },
       onDelete: 'CASCADE',
       primaryKey: true,
     },
     blogPostsId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'BlogPosts',
        key: 'id',
      },
      onDelete: 'CASCADE',
      primaryKey: true,
    }
   })
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable('PostsCategories');
  }
};