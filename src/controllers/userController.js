const userService = require('../services/usersService');

const userController = {
    create: async (req, res) => {
        const { displayName, email, password, image } = req.body;
    
        const user = await userService.create({
            displayName,
            email,
            password,
            image,
        });
        return res.status(201).json(user);
    },
};

module.exports = userController;