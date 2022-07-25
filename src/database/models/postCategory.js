const createPostCategory = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      postId: { 
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      categoryId: { 
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
    },
    {
      timestamps: false,
    });
  
    PostCategory.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost, { 
        as: 'blogPosts', 
        through: PostCategory,
        foreignKey: 'postId'
      })
      models.BlogPost.belongsToMany(models.Category, { 
        as: 'categories', 
        through: PostCategory,
        foreignKey: 'categoryId'
      })
    }
  
    return PostCategory;
  };
  
  module.exports = createPostCategory;