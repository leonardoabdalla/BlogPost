const jwt = require('jsonwebtoken');
require('dotenv');

const jwtService = {
    createToken: (data) => {
        const token = jwt.sign({ data }, process.env.JWT_SECRET);
        return token;
    },

    validateToken: (token) => {
        try {
            const data = jwt.verify(token, process.env.JWT_SECRET);
            return data;
        } catch (err) {
            const error = new Error('token inválido');
            error.name = 'UnauthorizedError';
            throw error;
        }
    },
};

module.exports = jwtService;