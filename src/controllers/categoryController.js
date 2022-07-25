const categoryService = require('../services/categoryService');
const token = require('../services/jwtService');

const categoryController = {
    create: async (req, res) => {
        const { name } = categoryService.validateBody(req.body);
        const category = await categoryService.create({
            name,
        });
        token.createToken({ name });
        console.log(category);
        return res.status(201).json({ id: category.id, name });
    },

    getAll: async (req, res) => {
        const rows = await categoryService.getAll();
        res.status(200).json(rows);
    },

};

module.exports = categoryController;