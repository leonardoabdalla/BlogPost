const Joi = require('joi');
const db = require('../database/models');

const userServices = {
    validateBody: (data) => {
        const schema = Joi.object({
            displayName: Joi.string().min(8).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required(),
            image: Joi.string(),
        });      
        const { error, value } = schema.validate(data);
        console.log('erro ===> ', error);
        // if (error) {
        //     const e = new Error('"email" must be a valid email');
        //     e.name = 'ValidationError';
        //     throw e;
        // }
        if (error) throw error;
        return value;
    },
    
    create: async ({ displayName, email, password, image }) => {
        const user = await db.User.create({ displayName, email, password, image });
        return user;
    },

    getAll: async () => {
        const users = await db.User.findAll();
        return users;
    },

    getById: async () => {
        const user = await db.User.findOne();
        return user;
    },
};

module.exports = userServices;