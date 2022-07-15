const createUser = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: DataTypes.INTEGER,
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    }, {
        tableName: 'users',
        underscored: true,
    });

    return User;
};

module.exports = createUser;