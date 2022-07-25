const createCategory = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
    }, {
        timestamps: false,
    });

    return Category;
};

module.exports = createCategory;