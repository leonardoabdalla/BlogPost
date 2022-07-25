const jwt = require('jsonwebtoken');
require('dotenv');

const jwtService = {
    createToken: (data) => {
        console.log('chegando na função ===> ', data);
        const token = jwt.sign({ data }, process.env.JWT_SECRET);
        console.log('token criado ==> ', token);
        return token;
    },

    validateToken: (token) => {
        try {
            const data = jwt.verify(token, process.env.JWT_SECRET);
            return data;
        } catch (err) {
            if (err.message === 'jwt must be provided') {
                const error = new Error('Token not found');
                error.name = 'UnauthorizedError';
                throw error;
            }
            const error = new Error('Expired or invalid token');
            error.name = 'UnauthorizedError';
            throw error;
        }
    },
};

module.exports = jwtService;