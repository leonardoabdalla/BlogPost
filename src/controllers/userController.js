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
};

module.exports = userController;