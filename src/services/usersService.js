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
        if (error) throw error;
        return value;
    },
    
    create: async ({ displayName, email, password, image }) => {
        console.log('userservice ===> ');
        const user = await db.User.create({ displayName, email, password, image });
        return user;
    },

    getAll: async () => {
        const users = await db.User.findAll({ attributes: { exclude: ['password'] } });
        return users;
    },

    getById: async (id) => {
        const user = await db.User.findByPk(id, { attributes: { exclude: ['password'] } });
        if (user === null) {
            const e = new Error('User does not exist');
            e.name = 'idNull';
            throw e;
        }
        console.log(user);
        return user;
    },
};

module.exports = userServices;