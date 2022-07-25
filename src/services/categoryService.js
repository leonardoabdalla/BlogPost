const Joi = require('joi');
const db = require('../database/models');

const categoryServices = {
    validateBody: (data) => {
        const schema = Joi.object({
            name: Joi.string().required(),
        });      
        const { error, value } = schema.validate(data);
        if (error) throw error;
        console.log(' retornando da validação ===> ', value);

        return value;
    },
    
    create: async ({ name }) => {
        console.log('userservice ===> ');
        const category = await db.Category.create({ name });
        return category;
    },

    getAll: async () => {
        const category = await db.Category.findAll();
        return category;
    },
};

module.exports = categoryServices;