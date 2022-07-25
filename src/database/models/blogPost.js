const createBlogPost = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: { 
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      published: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updated: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
    },
    {
      timestamps: false,
    });
  
    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User, { as: 'user', foreignKey: 'userId'})
    }
  
    return BlogPost;
  };
  
  module.exports = createBlogPost;