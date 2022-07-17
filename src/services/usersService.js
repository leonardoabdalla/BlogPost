const db = require('../database/models');

const userServices = {
    create: async ({ displayName, email, password, image }) => {
        const user = await db.User.create({ displayName, email, password, image });
        return user;
    },
};

module.exports = userServices;