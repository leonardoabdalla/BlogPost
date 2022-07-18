const Joi = require('joi');
const db = require('../database/models');

const userServices = {
    create: async ({ displayName, email, password, image }) => {
        // const schema = Joi.object({
        //     displayName: Joi.string().min(8).require(),
        //     email: Joi.string().email().require(),
        //     password: Joi.string().min(6).require(),
        // });
        const user = await db.User.create({ displayName, email, password, image });
        return user;
    },
};

module.exports = userServices;