const blogPostService = require('../services/blogPostService');

const blogPostController = {
    getAll: async (req, res) => {
        const rows = await blogPostService.getAll();
        res.status(200).json(rows);
    },

};

module.exports = blogPostController;