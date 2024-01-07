// Importing necessary modules
import dbConfig from '../config/db.config';
import { Sequelize } from 'sequelize-typescript';

// Creating a new Sequelize instance
const sequelize = new Sequelize(dbConfig.DB, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: 'mysql',
  define: {
    freezeTableName: true,
  },
});

// Define the structure of the database object :models
interface Db {
  Sequelize: typeof Sequelize;
  sequelize: Sequelize;
  books: any; //book model
  publishers: any; // publisher model
  comments: any; //  comment model
}

// Creating an instance of the Db interface
const db: Db = {
  Sequelize,
  sequelize,
  books: require("./book.model").default(sequelize, Sequelize),
  publishers: require("./publisher.model").default(sequelize, Sequelize),
  comments: require("./comment.model").default(sequelize, Sequelize),
};

// Defining associations
db.books.belongsTo(db.publishers, { foreignKey: 'publisher_id', targetKey: 'id' });
db.publishers.hasMany(db.books, { foreignKey: 'publisher_id', sourceKey: 'id' });

db.comments.belongsTo(db.books, { foreignKey: 'book_id', targetKey: 'id' });
db.books.hasMany(db.comments, { foreignKey: 'book_id', targetKey: 'id' });

// Exporting the db object
export default db;
