const Joi = require('joi');
const db = require('../database/models');

const userServices = {
    create: async ({ displayName, email, password, image }) => {
        validateBody: (data) => {
            const schema = Joi.object({
                displayName: Joi.string().min(8).require(),
                email: Joi.string().email().require(),
                password: Joi.string().min(6).require(),
            });
    
            const { error, value } = schema.validate(data);
            console.log(error);
    
            if (error) {
               const e = new Error('Some required fields are missing');
               e.name = 'ValidationError';
               throw e;
            }
            return value;
        },
        
        const user = await db.User.create({ displayName, email, password, image });
        return user;
    },
};

module.exports = userServices;