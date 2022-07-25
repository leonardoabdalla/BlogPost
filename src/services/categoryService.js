const Joi = require('joi');
const db = require('../database/models');

const categoryServices = {
    validateBody: (data) => {
        const schema = Joi.object({
            name: Joi.string().required(),
        });      
        const { error, value } = schema.validate(data);
        if (error) throw error;
        return value;
    },
    
    create: async ({ name }) => {
        const category = await db.Category.create({ name });
        return category;
    },

    getAll: async () => {
        const category = await db.Category.findAll();
        return category;
    },

};

module.exports = categoryServices;