// Importing necessary modules
import dbConfig from '../config/db.config';
import { Sequelize } from 'sequelize-typescript';
// Creating a new Sequelize instance
const sequelize = new Sequelize(dbConfig.DB, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    // dialect: dbConfig.dialect,
    define: {
        freezeTableName: true,
    },
});
// Creating an instance of the Db interface
const db = {
    Sequelize,
    sequelize,
    books: require("./book.model")(sequelize, Sequelize),
    publishers: require("./publisher.model")(sequelize, Sequelize),
    comments: require("./comment.model")(sequelize, Sequelize),
};
// Defining associations
db.books.belongsTo(db.publishers, { foreignKey: 'publisher_id', targetKey: 'id' });
db.publishers.hasMany(db.books, { foreignKey: 'publisher_id', sourceKey: 'id' });
db.comments.belongsTo(db.books, { foreignKey: 'book_id', targetKey: 'id' });
db.books.hasMany(db.comments, { foreignKey: 'book_id', targetKey: 'id' });
// Exporting the db object
export default db;
