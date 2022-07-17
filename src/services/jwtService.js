const jwt = require('jsonwebtoken');
require('dotenv');

const jwtService = {
    createToken: (data) => {
        const token = jwt.sign({ data }, process.env.JWT_SECRET);
        return token;
    },
};

module.exports = jwtService;