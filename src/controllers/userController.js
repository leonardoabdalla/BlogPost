const userService = require('../services/usersService');
const token = require('../services/jwtService');

const userController = {
    create: async (req, res) => {
        const { displayName, email, password, image } = userService.validateBody(req.body);
        const user = await userService.create({
            displayName,
            email,
            password,
            image,
        });
        const token2 = token.createToken();
        console.log(user);
        return res.status(201).json({ token: token2 });
    },

    getAll: async (req, res) => {
        const rows = await userService.getAll();
        res.status(200).json(rows);
    },

    getById: async (req, res) => {
        const { id } = req.params;
        const user = await userService.getById(id);
        res.status(200).json(user);
    },
};

module.exports = userController;