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
        const category = await db.User.findAll({ attributes: { exclude: ['password'] } });
        return category;
    },

    // getById: async (id) => {
    //     const user = await db.User.findByPk(id, { attributes: { exclude: ['password'] } });
    //     if (user === null) {
    //         const e = new Error('User does not exist');
    //         e.name = 'idNull';
    //         throw e;
    //     }
    //     console.log(user);
    //     return user;
    // },
};

module.exports = categoryServices;