const categoryService = require('../services/categoryService');
const token = require('../services/jwtService');

const categoryController = {
    create: async (req, res) => {
        const { name } = categoryService.validateBody(req.body);
        const category = await categoryService.create({
            name,
        });
        const token2 = token.createToken();
        console.log(category);
        return res.status(201).json({ token: token2 });
    },

    getAll: async (req, res) => {
        const rows = await categoryService.getAll();
        res.status(200).json(rows);
    },

};

module.exports = categoryController;