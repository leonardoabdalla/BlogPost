const Joi = require('joi');
const db = require('../database/models');
const jwtService = require('./jwtService');

const authService = {
    validateBody: (data) => {
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        });

        const { error, value } = schema.validate(data);

        if (error) {
           const e = new Error('Some required fields are missing');
           e.name = 'ValidationError';
           throw e;
        }
        return value;
    },

    login: async (email, password) => {
        const user = await db.User.findOne({ where: { email } });

        if (!user || user.password !== password) {
            const e = new Error('Invalid fields');
            e.name = 'ValidationError';
            throw e;
        }

        const token = jwtService.createToken(user);

        return token;
    },

    validateToken: (token) => {
        const data = jwtService.validateToken(token);
        return data;
    },
};

module.exports = authService;