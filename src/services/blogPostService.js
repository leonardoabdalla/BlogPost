const db = require('../database/models');

const blogPostServices = {
    getAll: async () => {
        const blogPost = await db.BlogPost.findAll({
            include: [
              { model: db.User, as: 'user', attributes: { exclude: ['password'] } },
              { model: db.Category, as: 'categories', through: { attributes: [] } },
            ],
          });
        return blogPost;
    },
};

module.exports = blogPostServices;