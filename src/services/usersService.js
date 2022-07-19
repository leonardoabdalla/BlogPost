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
        // if (error === undefined) {
        //     const e = new Error('"email" must be a valid email');
        //     e.name = 'ValidaEmail';
        //     throw e;
        // }
        if (error) throw error;
        return value;
    },
    
    create: async ({ displayName, email, password, image }) => {
        const user = await db.User.create({ displayName, email, password, image });
        return user;
    },
};

module.exports = userServices;